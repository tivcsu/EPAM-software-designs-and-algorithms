import { ShipmentDecorator } from './ShipmentDecorator';

export class ReturnReceiptShipmentDecorator extends ShipmentDecorator {
  public ship(): string {
    return `${this.wrappee.ship()} 
    **MARK RETURN RECEIPT REQUESTED**`
  }
}
