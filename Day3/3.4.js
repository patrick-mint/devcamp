debugger;

function draw(n) {

    let result = [];
    text = ''; 
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n - i); j++) {
            result.push(text += '-');
        }

        for (let k = 0; k < ((2 * i) - 1); k++) {
            result.push(text += '*');
        }

        for (let g = 1; g <= (n - i); g++) {
            result.push(text += '-');
        }
        text += "\n";
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            result.push(text += '-');
        }

        for (let k = 0; k < ((2 * (n - i)) - 1); k++) {
            result.push(text += '*');
        }

        for (let g = 0; g < i; g++) {
            result.push(text += '-');
        }
        text += "\n";
    }
    console.log(text);
    console.log(result);

}
draw(4);