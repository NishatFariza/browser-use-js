console.log('Console number one');
console.log('Console number Two');
setTimeout(() => console.log('Set Time out 5 second'), 5000)
setTimeout(() => console.log('Set Time out 3 second'), 3000)
setTimeout(() => console.log('Set Time out 2 second'), 2000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log('Console number three');
console.log('Console number four');

// for (let i =0;   1<3; i++) {
//   console.log(i);
    
// }