//DAY 50
//TASK 1 (Demonstrate the use of settimeout() function)
setTimeout(()=> {
    console.log("This message is shown after a 2-seconds delay.");
}, 2000);
//it shows how to use setTimeout() to delay actions in your code.

//TASK 2 (Explain the concept of the event loop in JS with an example)
console.log("start");

setTimeout(()=> {
    console.log("Callback executed"); 
}, 0 );
//although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.

//TASK 3 (Describe how asynchronous callbacks differ from synchronous code execution)
//Synchoronous example
console.log("Before synchronous operation");
for(let i=0; i < 1e9; i++){}
console.log("After synchronous operation");
//Asynchronous example
console.log("Before asynchronous operation");
setTimeout(()=> {
    console.log("Asynchronous operation completed.");
}, 1000);
console.log("After asynchronous operation setup");
//demonstrate how the rest of the code continues to execute without for the asynchronous operation