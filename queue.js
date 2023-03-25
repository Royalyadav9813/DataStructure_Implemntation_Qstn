// Implementation of Queue using array by Gaurav kumar.
class Queue{
    constructor(){
      this.array=[];
    }
    // Function To add element at the end of the Queue.
    enqueue(element){
      return this.array.push(element);
    }
    // Function To remove element from the front of the Queue.
    dequeue(){
      return this.array.shift();
    }
    // Function to find the first element of the Queue.
    Peek(){
      return this.array[0];
    }
    // Function to check whether the Queue is Empty or not.
    isEmpty(){
      return this.array.length==0;
    }
    
  }
  let queue=new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  console.log(queue.array);
  queue.dequeue();
  console.log(queue.array);
  console.log(queue.Peek());
  console.log(queue.isEmpty());