import { AirEastShipper } from './AirEastShipper';
import { ChicagoSprintShipper } from './ChicagoSprintShipper';
import { IShipmentInstance, mockShipment } from './mockShipment'
import { PacificParcelShipper } from './PacificParcelShipper';
import { IShipper } from './Shipper';

interface IShipment {
  getInstance(): IShipmentInstance
  getShipmentId(): number
  ship(): string
}

let currentId = 0;

export class Shipment implements IShipment {
  private shipper: IShipper
  private shipment: IShipmentInstance

  constructor() {
    this.shipment = this.getInstance()
    this.shipper = this.getShipper(this.shipment.fromZipCode)
  }

  public getInstance() {
    this.shipment = mockShipment
    return this.shipment
  } 
  public getShipmentId() {
    currentId += 1
    this.shipment.shipmentId = currentId
    return this.shipment.shipmentId
  }
  public ship() {
    this.getInstance()
    this.getShipmentId()
    return `${this.shipment.shipmentId}: ${this.shipment.fromZipCode}, ${this.shipment.fromAddress} - ${this.shipment.toZipCode}, ${this.shipment.ToAddress}, ${this.shipper.getCost()}`
  }
  private getShipper (zip: string) {
    const chicagoValues = ['4', '5', '6']
    const pacificValues = ['7', '8', '9']

    if (chicagoValues.indexOf(zip[0]) !== -1) {
      return new ChicagoSprintShipper()
    }
    if (pacificValues.indexOf(zip[0]) !== -1) {
      return new PacificParcelShipper()
    }
    else {
      return new AirEastShipper()
    }
    
  }
}
