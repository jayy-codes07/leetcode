    /**
    * @param {string} s
    * @return {number}
    */
    var lengthOfLastWord = function(s) {
        let trimarr = s.trim()
        let sliptedArr = trimarr.split(" ")
        let lengthLast = sliptedArr[sliptedArr.length - 1] 

        let word = lengthLast.length
        return word

    };
