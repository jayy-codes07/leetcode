/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
     if(Math.abs(x) !== x ) return false
    
    let rev = 0
    let valx = x
    while(valx > 0){
       let reminder = valx % 10 
       rev = rev * 10 + reminder
       valx = Math.floor(valx / 10) 
    }
    if(rev == x) return true
    else return false
};

console.log(isPalindrome(10011));
