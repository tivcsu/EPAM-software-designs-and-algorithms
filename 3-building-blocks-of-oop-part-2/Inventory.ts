import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory{
  private items: Item[]

  constructor(){
    this.items = []
  }
  public addItem(item: Item): void {
    this.items = [...this.items, item]
  }

  public sort(): void
  public sort(comparator: ItemComparator): void
  public sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort((first, second) => comparator.compare(first, second))
    } else {
      this.items.sort((first, second) => first.getValue() - second.getValue())
    }

  }

  public toString(): string {
    return this.items.join(', ')
  }
}
