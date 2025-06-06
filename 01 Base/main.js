const arr = [1, 2, 33, 40, -2, 12];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.log("Filtered: ", arr.filter(i => i % 10 === 0));
