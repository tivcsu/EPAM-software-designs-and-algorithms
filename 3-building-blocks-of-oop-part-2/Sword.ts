import { Weapon } from './Weapon';

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(baseDamage, baseDurability, value, weight)
    this.name = 'sword'
  }
  public polish(): void {
    const maxDamageModifier = this.baseDamage * 0.25;
    const currentDamageModifier = this.damageModifier;
    if ((currentDamageModifier + Weapon.prototype.MODIFIER_CHANGE_RATE) <= maxDamageModifier) {
      this.damageModifier += Weapon.prototype.MODIFIER_CHANGE_RATE;
    } else {
      this.damageModifier = maxDamageModifier;
    }
  }
}
