import { Item } from './Item'

export abstract class Weapon extends Item {
  public MODIFIER_CHANGE_RATE: number = 0.05
  protected baseDamage: number
  protected damageModifier: number
  private baseDurability: number
  protected durabilityModifier: number

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(value, weight)
    this.baseDamage = baseDamage
    this.baseDurability = baseDurability
    this.durabilityModifier = 0
    this.damageModifier = 0
  }
  public polish(): void {}
  public use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.name}, it is broken.`
    }
    const damage = (Math.round(this.getDamage() * 100) / 100).toFixed(2)
    this.durabilityModifier -= this.MODIFIER_CHANGE_RATE

    return this.getDurability() > 0 ?
      `You use the ${this.name}, dealing ${damage} points of damage.` :
      `You use the ${this.name}, dealing ${damage} points of damage.\nThe ${this.name} breaks.`
  }
  public toString(): string {
    const weight = (Math.round(this.weight * 100) / 100).toFixed(2)
    const damage = (Math.round(this.getDamage() * 100) / 100).toFixed(2)
    const durability = this.getDurability() * 100
    return `${this.getName()} - Value: ${this.getValue()}, Weight: ${weight}, Damage: ${damage}, Durability: ${durability}%`;
  }
  public getDamage(): number {
    return this.baseDamage + this.damageModifier
  }
  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier
  }
}
