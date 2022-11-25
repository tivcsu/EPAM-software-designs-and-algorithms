export interface IShipmentInstance {
  shipmentId: number
  weight: number
  fromAddress: string
  fromZipCode: string
  ToAddress: string
  toZipCode: string
  specialCodes: string[]
}

export const mockShipment: IShipmentInstance = {
  shipmentId: 0,
  weight: 200,
  fromAddress: 'From Address',
  fromZipCode: '9111',
  ToAddress: 'To Address',
  toZipCode: '2222',
  specialCodes: ['fragile', 'returnReceipt']
}
