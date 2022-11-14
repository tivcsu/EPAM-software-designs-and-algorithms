import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  private numberOfSlices: number
  private slicesEaten: number

  constructor(numberOfSlices: number, spoiled: boolean, value?: number, weight?: number) {
    super(spoiled, value ?? 0, weight ?? 0)
    this.numberOfSlices = numberOfSlices
    this.name = 'pizza'
    this.slicesEaten = 0
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten += 1;
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true)
      }
      return "You eat a slice of the pizza"
    } else {
      return ""
    } 
  }
}
