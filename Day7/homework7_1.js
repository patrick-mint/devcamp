let arr = [1,2,3,4,5,6,7,8,9,10];

const result1 = arr.filter(num => {
    return (num%2 == 0) ;    
  });
//   console.log(result1); 
const result2 = result1.map( x => x*1000);
console.log(result2);
  
  
  
