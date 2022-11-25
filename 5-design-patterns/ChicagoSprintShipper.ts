import { IShipmentInstance, mockShipment } from './mockShipment';
import { IShipper } from './Shipper';

export class ChicagoSprintShipper implements IShipper {
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
    return this.shipmentInstance.weight * this.cost
  }
}
