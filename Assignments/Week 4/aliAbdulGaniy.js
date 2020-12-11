<<<<<<< HEAD
function isPrimeNumber(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }
}
console.log(isPrimeNumber(9))
=======
function isPrimeNumber(num){
for(let i=2; i < num.length; i++)
if(num % i ===0) return false;
return num >1

}
console.log(isPrimeNumber(9))
>>>>>>> upstream/master
