var fruits = ["apple", "banana", "mango"]

function addFruits(fruit, callback) {
    setTimeout(function () {
        fruits.push(fruit)
        console.log(`add ${fruit} Success`)
        callback()
    }, 500)
}

function getFruits() {
    setTimeout(function () {
        console.log(fruits)
    }, 200)
}

addFruits("pineapple", function () {
    setTimeout(function () {
        console.log(fruits)
    }, 200)
})
