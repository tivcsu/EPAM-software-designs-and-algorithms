import { ShipmentDecorator } from './ShipmentDecorator';

export class DoNotLeaveShipmentDecorator extends ShipmentDecorator {
  public ship(): string {
    return `${this.wrappee.ship()} 
    **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`
  }
}
