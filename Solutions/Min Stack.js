class MinStack {
    constructor() {
        this.stack = [];
        this.minimumStack = [];
    }

    push(num) {
        if(this.minimumStack.length === 0 || num <= this.getMin()) {
            this.minimumStack.push(num);
        }

        this.stack.push(num);
    }

    pop() {
        const popped = this.stack.pop();
        if(popped === this.getMin()) {
            this.minimumStack.pop();
        }

        return popped;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minimumStack[this.minimumStack.length - 1];
    }
}