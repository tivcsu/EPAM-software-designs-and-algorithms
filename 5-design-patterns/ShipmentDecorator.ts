import { IShipment } from './Shipment';

export class ShipmentDecorator implements IShipment {
  protected wrappee: IShipment;

  constructor(shipment: IShipment) {
    this.wrappee = shipment;
  }
  public getShipmentId() {
    return this.wrappee.getShipmentId()
  }
  getInstance() {
    return this.wrappee.getInstance()
  }
  public ship() { 
    return this.wrappee.ship();
  }
}
