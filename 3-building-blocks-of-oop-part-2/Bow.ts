import { Weapon } from './Weapon';

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(baseDamage, baseDurability, value, weight)
    this.name = 'bow'
  }
  public polish(): void {
    const maxDurabilityModifier = 1;
    const currentDurabilityModifier = this.durabilityModifier;
    if ((currentDurabilityModifier + Weapon.prototype.MODIFIER_CHANGE_RATE) <= maxDurabilityModifier) {
      this.durabilityModifier += Weapon.prototype.MODIFIER_CHANGE_RATE;
    } else {
      this.durabilityModifier = maxDurabilityModifier;
    }
  }
}
