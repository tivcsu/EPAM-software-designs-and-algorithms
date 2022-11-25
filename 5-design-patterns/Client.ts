import { LetterShipment } from './LetterShipment';
import { IShipmentInstance } from './mockShipment';
import { OversizeShipment } from './OversizeShipment';
import { PackageShipment } from './PackageShipment';

export class Client {
  private shipment: IShipmentInstance

  constructor(shipment: IShipmentInstance) {
    this.shipment = shipment
  }

  public ship() {
    if (this.shipment.weight <= 15) {
      const concreteShipment = new LetterShipment()
      console.log(concreteShipment.ship());
      
    }
    else if (this.shipment.weight <= 160) {
      const concreteShipment = new PackageShipment()
      console.log(concreteShipment.ship());
      
    }
    else {
      const concreteShipment = new OversizeShipment()
      console.log(concreteShipment.ship());
      
    }
  }
}
