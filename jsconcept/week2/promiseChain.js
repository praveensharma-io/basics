function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
  }
  
  function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
  }
  
  function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
  }
  
  async function calculateTimeSequential(t1, t2, t3) {
    const start = Date.now();
    
    await wait1(t1); // waits t1
    await wait2(t2); // waits t2
    await wait3(t3); // waits t3
  
    const end = Date.now();
    return end - start;
  }

  calculateTimeSequential(1,2,3).then((time)=>{
    console.log(`Time taken: ${time}ms`);
  });
  
  
