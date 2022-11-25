import { IShipmentInstance, mockShipment } from './mockShipment'

let currentId = 0;

export abstract class Shipment {
  protected shipmentId: number

  protected getShipmentId() {
    return currentId + 1;
  }

  abstract getInstance(): IShipmentInstance
  abstract ship(): string
}
