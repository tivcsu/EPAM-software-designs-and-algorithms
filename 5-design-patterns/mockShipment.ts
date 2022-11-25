export interface IShipmentInstance {
  shipmentId: number
  weight: number
  fromAddress: string
  fromZipCode: string
  ToAddress: string
  toZipCode: string 
}

export const mockShipment: IShipmentInstance = {
  shipmentId: 0,
  weight: 10,
  fromAddress: 'From Address',
  fromZipCode: '9111',
  ToAddress: 'To Address',
  toZipCode: '2222'
}
