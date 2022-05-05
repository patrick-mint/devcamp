debugger
function draw(n) {

    let text = "";
    // External loop
    for (let i = n; i >0; i--) {
        sum = "";
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            sum += "_";
        }
        // printing star
        for (let k = 0; k < ((2 * i) - 1); k++) {
            sum += "*";
        }
        // reprinting spaces
        for (let j = 1; j <= n - i; j++) {
            sum += "_";
        }
        text += sum;
        text += "\n";
        
    }
    console.log(text);

}

draw(4);