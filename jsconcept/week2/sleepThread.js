/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * The function should return a promise just like before.
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
      const start = Date.now();
      while (Date.now() - start < milliseconds) {
        // Busy wait: do nothing but block
      }
      resolve(); // Resolve after blocking time
    });
  }
  
  sleep(1000).then(()=>{
    console.log("Promise resolved after 1 second");
  });

  sleep(2000).then(()=>{
    console.log("Promise resolved after 2 second");
  });
  
  
  