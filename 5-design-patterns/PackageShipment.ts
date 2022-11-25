import { AirEastShipper } from './AirEastShipper';
import { ChicagoSprintShipper } from './ChicagoSprintShipper';
import { IShipmentInstance, mockShipment } from './mockShipment';
import { PacificParcelShipper } from './PacificParcelShipper';
import { Shipment } from './Shipment';
import { IShipper } from './Shipper';

export class PackageShipment extends Shipment {
  private shipper: IShipper
  private shipment: IShipmentInstance

  constructor() {
    super()
    this.shipment = this.getInstance()
    this.shipper = this.getShipper(this.shipment.fromZipCode)
  }

  public getInstance() {
    this.shipment = mockShipment
    return this.shipment
  }
  public ship() {
    this.getInstance()
    this.getShipmentId()
    return `Shipment with the ID ${this.shipment.shipmentId} will be picked up from ${this.shipment.fromAddress} ${this.shipment.fromZipCode} and shipped to ${this.shipment.ToAddress} ${this.shipment.toZipCode}
    Cost = ${this.shipper.getCost()}`
  }
  private getShipper (zip: string) {
    const chicagoValues = ['4', '5', '6']
    const pacificValues = ['7', '8', '9']

    if (chicagoValues.indexOf(zip[0]) !== -1) {
      return new ChicagoSprintShipper(0.20)
    }
    if (pacificValues.indexOf(zip[0]) !== -1) {
      return new PacificParcelShipper(0.19)
    }
    else {
      return new AirEastShipper(0.25)
    }
  }
}
