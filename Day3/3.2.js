debugger

function draw(n) {

    let text = "";
    let count = 1;

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= n - i; j++) {
            text += "_";
        }
       
        for (let k = 0; k < ((2 * i) - 1); k++) {
            text += count;
            count++;
        }
       
        for (let j = 1; j <= n - i; j++) {
            text += "_";
        }

        text += "\n";
    }
    for (let i = n-1; i > 0; i--) {
            // printing spaces
        for (let j = 1; j <= n - i; j++) {
            text += "_";
        }
        // printing star
        for (let k = 0; k < ((2 * i) - 1); k++) {
            text += count;
            count++;
        }
        // reprinting spaces
        for (let j = 1; j <= n - i; j++) {
            text += "_";
        }
        
        text += "\n";

    }
    console.log(text);

}

draw(4);