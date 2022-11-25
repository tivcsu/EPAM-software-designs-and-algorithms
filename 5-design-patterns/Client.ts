import { Shipment } from './Shipment';

export class Client {
  private shipment: Shipment

  constructor(shipment: Shipment) {
    this.shipment = shipment
  }

  public ship() {
    console.log(this.shipment.ship())
  }
}
