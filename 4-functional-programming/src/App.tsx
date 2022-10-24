import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import rows from './mocks/rows.json';

import styles from './App.module.scss';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const App: FC = () => {
  const [data, setData] = useState<Row[]>([]);
  const [sort, setSort] = useState<string>('');
  const [filter, setFilter] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  const dataConverter = (
    users: User[],
    accounts: Account[],
    images: Image[]
  ): Row[] => {  
    return users.map(user => {
      const userAccount = accounts.find(account => account.userID === user.userID)
      const userImage = images.find(image => image.userID === user.userID)
      const lastPayments = userAccount.payments.reduce((sum, payment) => sum + payment.totalSum, 0)
      
      return {
        avatar: userImage.url,
        username: user.username,
        country: user.country,
        name: user.name,
        lastPayments,
        posts: userAccount.posts
      } as Row
    })
  };


  const sortData = (rows: Row[]) => rows.sort((a, b) => sort === 'desc' ? 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()) :
    0 - a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

  const filterData = (rows: Row[]) => {    
    if (!filter.length) {
      return rows
    }
    if (filter.length === 2) {
      return rows.filter(row => row.posts === 0 || row.posts > 100)
    }
    return rows.filter(row => filter[0] === 'Without posts' ? row.posts === 0 : row.posts > 100)
  }

  const searchData = (rows: Row[]) => {
    if (!search) {
      return rows
    }   
    return rows.filter(row => row.country.toLowerCase().includes(search) ||
      row.name.toLowerCase().includes(search) ||
      row.username.toLowerCase().includes(search)
    )
  }

  useEffect(() => {
    // fetching data from API
    console.log('here');
    
    Promise.all([
      getImages(),
      getUsers(),
      getAccounts(),
    ]).then(([images, users, accounts]: [Image[], User[], Account[]]) =>{
      setData(dataConverter(users, accounts, images))
    }
    );
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateSelected={(val) => setFilter(val)}/>
            <Sort updateSelected={(val) => setSort(val)}/>
          </div>
          <Search updateSelected={(val) => setSearch(val)}/>  
        </div>
        <Table rows={sortData(filterData(searchData(data)))} />
      </div>
    </StyledEngineProvider>
  );
};
