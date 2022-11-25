import { IShipmentInstance, mockShipment } from './mockShipment'

export interface IShipment {
  getShipmentId(): number
  getInstance(): IShipmentInstance
  ship(): string
}

let currentId = 0;

export abstract class Shipment implements IShipment {
  protected shipmentId: number

  public getShipmentId() {
    return currentId + 1;
  }

  abstract getInstance(): IShipmentInstance
  abstract ship(): string
}
