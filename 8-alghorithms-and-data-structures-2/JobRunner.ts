class JobRunner<T> {
  private list: T[]
  private currentSize: number
  private capacity: number

  private writeIndex: number


  constructor(capacity: number) {
    this.list = []
    this.currentSize = 0
    this.capacity = capacity

    this.writeIndex = 0    
  }
  show() {
    return this.list
  }
  size(): number {
    return this.currentSize
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  clear(): void {
    this.list = new Array(this.capacity)
    this.currentSize = 0
  }

  insert(element: T): void {
    if (this.writeIndex === this.capacity) {
      return
    }
    
    this.list[this.writeIndex] = element
    this.list = this.mergeSort(this.list)

    this.currentSize += 1
    this.writeIndex = this.currentSize    
  }

  maximum(): T {
    return this.list[this.currentSize - 1];
  }
  extractMax(): T {
    if (this.isEmpty()) return null

    const removedVal = this.list[this.currentSize - 1]

    this.currentSize -= 1
    this.list.length -= 1

    return removedVal
  }
  increaseKey(element: T, newElement: T) {
    const index = this.list.indexOf(element)
    this.list[index] = newElement
    this.list = this.mergeSort(this.list)
  }

  run() {
    while (this.list.length) {
      console.log(this.extractMax())
    }
  }

  private merge(left: T[], right: T[]) {
    const result = [];
    const leftLenght = left.length;
    const rightLength = right.length;
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftLenght && rightIndex < rightLength) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex++]);
      } else {
        result.push(right[rightIndex++]);
      }
    }
  
    while (leftIndex < leftLenght) {
      result.push(left[leftIndex++]);
    }
  
    while (rightIndex < rightLength) {
      result.push(right[rightIndex++]);
    }
  
    return result;
  }
  
  private mergeSort(numbers: T[]): T[] {
    const length = numbers.length;
    const mid = Math.floor(length * 0.5);
    const left = numbers.slice(0, mid);
    const right = numbers.slice(mid, length);
  
    if (length === 1) {
      return numbers;
    }
  
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
}

export default JobRunner
