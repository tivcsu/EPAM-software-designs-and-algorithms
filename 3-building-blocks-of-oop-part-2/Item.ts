import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    public id: number
    public value: number
    public weight: number
    protected name: string
    static get numberOfItems(): number {return id}

    constructor(value: number, weight: number) {
        this.value = value;
        this.weight = weight;
        this.id = id + 1;
        id = this.id;
    }
    public compareTo(other: Item): number {
        if (this.value === other.value) {
            return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
        }
        return this.value > other.value ? 1 : -1;
    }

    public use(): void {}
    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue}, Weight: ${(Math.round(this.weight * 100) / 100).toFixed(2)}`;
    }
    public getId(): number {
        return this.id;
    }
    public getValue(): number {
        return this.value;
    }
    public getName(): string {
        return this.name;
    }
    public getWeight(): string {
        return this.weight.toString();
    }
    public setValue(price: number): void {
        this.value = price;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public setWeight(weight: number): void {
        this.weight = weight;
    }
    public reset(): void {
        id = 0;
    }
}
