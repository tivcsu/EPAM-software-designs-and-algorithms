import { IShipmentInstance, mockShipment } from './mockShipment';
import { IShipper } from './Shipper';

export class PacificParcelShipper implements IShipper {
  protected shipmentInstance: IShipmentInstance

  public getInstance() {
    this.shipmentInstance = mockShipment
    return this.shipmentInstance
  }
  public getCost() {
    this.getInstance()
    return this.shipmentInstance.weight * 51
  }
}
