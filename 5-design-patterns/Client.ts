import { DoNotLeaveShipmentDecorator } from './DoNotLeaveShipmentDecorator';
import { FragileShipmentDecorator } from './FragileShipmentDecorator';
import { LetterShipment } from './LetterShipment';
import { IShipmentInstance } from './mockShipment';
import { OversizeShipment } from './OversizeShipment';
import { PackageShipment } from './PackageShipment';
import { ReturnReceiptShipmentDecorator } from './ReturnReceiptShipmentDecorator';
import { IShipment } from './Shipment';

export class Client {
  private shipment: IShipmentInstance

  constructor(shipment: IShipmentInstance) {
    this.shipment = shipment
  }

  public ship() {
    let concreteShipment: IShipment
    if (this.shipment.weight <= 15) {
      concreteShipment = new LetterShipment()
    }
    else if (this.shipment.weight <= 160) {
      concreteShipment = new PackageShipment()
    }
    else {
      concreteShipment = new OversizeShipment()
    }
    concreteShipment.getInstance().specialCodes.forEach(code => {
      
      if (code === 'fragile') {
        concreteShipment = new FragileShipmentDecorator(concreteShipment)
      }
      if (code === 'doNotLeave') {
        concreteShipment = new DoNotLeaveShipmentDecorator(concreteShipment)
      }
      if (code === 'returnReceipt') {
        concreteShipment = new ReturnReceiptShipmentDecorator(concreteShipment)
      }
    })
    console.log(concreteShipment.ship());
     
  }
}
