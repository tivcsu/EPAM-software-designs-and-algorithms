import JobRunner from './JobRunner';

const jr = new JobRunner(10000)
for (let i = 0; i<10000; i++) {
  const key = Math.floor(Math.random() * (10000 - 0 + 1)) + 0  
  jr.insert(key)
}

jr.run()
