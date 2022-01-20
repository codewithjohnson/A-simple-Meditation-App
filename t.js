function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

x = random(1,4);
console.log(x);