let str = "00000000000000000000001000000";
let len = str.length - 1;
let sum = 0;
for (let i = 0; i < str.length; i++) {
    if (+str[i] === 1) sum += 2 ** (len - i);
}
console.log(sum)