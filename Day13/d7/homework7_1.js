let arr = [1,2,3,4,5,6,7,8,9,10];

const result = arr.filter(num => {
    // หาร2ลงตัว
    return (num%2 == 0) ;    
  });
//   console.log(result); 

// Need the answer for Result * 10

const resultX10 = result.map( x => x*1000);
console.log(resultX10);
  
  
  