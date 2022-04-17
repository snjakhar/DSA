console.log(powerOfTwo(1024))
function powerOfTwo(n) {
    let count = 0;
    while(n > 0){
        if (n % 2 == 1) count++;
        console.log(n)
        n = Math.floor(n/2);
    }
    return count === 1;
}