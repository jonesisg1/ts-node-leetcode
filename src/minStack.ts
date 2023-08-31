export class MinStack {
  #minStack: Array<number>;
  #stack: Array<number>;
  constructor() {
    this.#minStack = [];
    this.#stack = [];
  }

  push(val: number): void {
    if(this.#stack.length === 0) {
      this.#minStack.push(0);
    } else {
      const minIdx: number = this.#minStack.at(-1) || 0;
      const currentMin: number = this.#stack.at(minIdx) || 0;
      if(val < currentMin) {
      this.#minStack.push(this.#stack.length);
      }
    }
    this.#stack.push(val);
    console.log(this.#minStack)
  }

  pop(): void {
    this.#stack.pop();
    if(this.#minStack.at(-1) === this.#stack.length) {
      this.#minStack.pop();
    }
  }

  top(): number {
    return this.#stack.at(-1) || 0;
  }

  getMin(): number {
    const currentMin: number = this.#minStack.at(-1) || 0;
    return this.#stack.at(currentMin) || 0;
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/