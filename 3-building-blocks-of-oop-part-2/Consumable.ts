import { Item } from './Item'

export abstract class Consumable extends Item {
  private consumed: boolean
  private spoiled: boolean

  constructor(spoiled: boolean, value: number, weight: number, ) {
    super(value, weight)
    this.spoiled = spoiled
    this.consumed = false
  }
  public use(): void {
    if (!this.isConsumed() && !this.spoiled) {
      this.eat()
    }
  }
  public eat(): string {
    if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume.`
    }
    return this.spoiled ? 
      `You eat the ${this.getName()}.\nYou feel sick.` : 
      `You eat the ${this.getName()}.`
  }
  public toString(): string {
    const weight = (Math.round(this.weight * 100) / 100).toFixed(2)
    return `${this.name} - Value: ${this.getValue()}, Weight: ${weight}, Spoiled: ${this.spoiled}, Consumed: ${this.isConsumed()}`
  }
  public isConsumed(): boolean {
    return this.consumed
  }
  public setConsumed(consumed: boolean): void {
    this.consumed = consumed
  }
}
