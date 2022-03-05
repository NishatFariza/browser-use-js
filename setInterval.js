console.log('First');
console.log('Second');
console.log('Third');


// setInterval(() =>{
//     console.log('thik thik thik');
    
// }, 2000)

let second=0;

const timeId =setInterval(() =>{
    second++;
    // console.log(second);
    if(second>15){
        setInterval(timeId);
        
    }
    

}, 1000)


function foo(b) {
    let a = 10
    return a + b + 11
  }
  
  function bar(x) {
    let y = 3
    return foo(x * y)
  }