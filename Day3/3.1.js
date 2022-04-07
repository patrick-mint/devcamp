debugger

function draw(n) {

    let text = "";

    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            text += "_";
        }
        // printing star
        for (let k = 0; k < ((2 * i) - 1); k++) {
            text += "*";
        }
        // reprinting spaces
        for (let j = 1; j <= n - i; j++) {
            text += "_";
        }

        text += "\n";
    }
    for (let i = n-1; i > 0; i--) {
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