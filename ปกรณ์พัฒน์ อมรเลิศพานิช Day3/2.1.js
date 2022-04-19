debugger;
let result = ""
function draw(n) {
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < n; j++) {
            if (i==j){
            result +=  "*";
             } else if (i<j){
                result +=  "_";
             }
             else {
            result += "*";
        }
    } 
    result += '\n'; 
}
   return result;
};


console.log(draw(4));
