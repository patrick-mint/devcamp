function draw(n) {
    text = '';
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            text += j;
        }
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);