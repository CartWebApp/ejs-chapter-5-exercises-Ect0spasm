function loop(forl, test, update, body) {
    for (let value = forl; test(value); update(value) ) 
    body(value);{
    }
}
// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1