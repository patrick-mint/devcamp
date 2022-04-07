debugger;
function draw(n) {
    let result = [];
    text = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                result.push(text += "*");
            } else if (i < j) {
                result.push(text += "_");
            } else {
                result.push(text += "*");
            }
        }
        text += ('\n');
    }
console.log(text);
console.log(result);
};

draw(4);