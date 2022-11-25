import { ShipmentDecorator } from './ShipmentDecorator';

export class FragileShipmentDecorator extends ShipmentDecorator {
  public ship(): string {
    return `${this.wrappee.ship()}
    **MARK FRAGILE**`
  }
}
