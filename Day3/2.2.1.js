let result = ""
function draw(n) {
    for (let i = n; i >=1 ; i--) {
        let sum = "";
        for (let j = n; j >= 1 ; j--) {
            if (i==j){
            sum +=  "*";
             } else if (i<j){
                sum +=  "_";
             }
             else {
            sum += "*";
        }
    } 
    sum = sum.split("").reverse().join("");
    result += sum;
    result += '\n'; 
}
   return result;
};


console.log(draw(4));
