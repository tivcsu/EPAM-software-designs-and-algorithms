import { IShipmentInstance, mockShipment } from './mockShipment';
import { IShipper } from './Shipper';

export class AirEastShipper implements IShipper {
  protected shipmentInstance: IShipmentInstance
  private cost: number
  private extraCost: number

  constructor(cost: number)
  constructor(cost: number, extraCost: number)
  constructor(cost: number, extraCost?: number) {
    this.cost = cost
    this.extraCost = extraCost ?? 0
  }

  public getInstance() {
    this.shipmentInstance = mockShipment
    return this.shipmentInstance
  }
  public getCost() {
    this.getInstance()
    return this.shipmentInstance.weight > 160 ?
      160 * this.cost + this.extraCost : 
      this.shipmentInstance.weight * this.cost
  }
}
