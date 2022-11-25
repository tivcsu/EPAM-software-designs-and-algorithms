import { IShipmentInstance, mockShipment } from './mockShipment'

export interface IShipper {
  getInstance(): IShipmentInstance
  getCost(): number
}
