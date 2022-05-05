function draw(n) {
    let count = (n*n);
    text = '';
    for (let i = n; i >=1 ; i--) {
        for (let j = n; j >= 1 ; j--) {
            text += count;
            count--
        }
        text += '\n';
    }
    console.log(text);
}
draw(2);
draw(3);
draw(4);
