class Stack{
  constructor(){
    this.array=[];
  }
  // Function to Push element in the stack.
  Push(element){
    return this.array.push(element);
}
// Function to Pop element from the stack.
  Pop(){
    return this.array.pop();
  }
  // Function to Check whether the stack is empty or not.
  isEmpty(){
    return this.array.length=='0';
  }
  // Function to find the topmost element of the stack.
  Peek(){
    return this.array[this.array.length-1];
  }
  // Function to find the Size of the stack.
  Size(){
    return this.array.length;
  }
}
let stack=new Stack();
stack.Push(2);
stack.Push(3);
stack.Push(4);
stack.Push(5);
console.log(stack.array);
stack.Pop();
console.log(stack.array);
console.log(stack.isEmpty());
console.log(stack.Peek());
console.log(stack.Size());