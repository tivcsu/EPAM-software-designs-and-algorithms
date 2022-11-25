import { IShipmentInstance, mockShipment } from './mockShipment'

interface IShipment {
  getInstance(): IShipmentInstance
  getShipmentId(): number
  ship(): string
}

let currentId = 0;

export class Shipment implements IShipment {
  private shipmentInstance: IShipmentInstance

  public getInstance() {
    this.shipmentInstance = mockShipment
    return this.shipmentInstance
  } 
  public getShipmentId() {
    currentId += 1
    this.shipmentInstance.shipmentId = currentId
    return this.shipmentInstance.shipmentId
  }
  public ship() {
    this.getInstance()
    this.getShipmentId()
    return `${this.shipmentInstance.shipmentId}: ${this.shipmentInstance.fromZipCode}, ${this.shipmentInstance.fromAddress} - ${this.shipmentInstance.toZipCode}, ${this.shipmentInstance.ToAddress}, ${this.calculateCost()}`
  }
  private calculateCost() {
    return this.shipmentInstance.weight * 39
  }
}
