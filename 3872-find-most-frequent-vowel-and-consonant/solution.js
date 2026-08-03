/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let hashmap = {}
    let maxVowel = 0
    let maxConsonant = 0
    let vowels = 0
    let consonants = 0
    let vowel = new Set("aeiou")

    for (let i = 0; i < s.length; i++) {
        hashmap[s[i]] = (hashmap[s[i]] || 0) + 1
    }

    for (i in hashmap) {
        if (vowel.has(i)) {
            vowels = hashmap[i]
            consonants = 0
        } else {
            consonants = hashmap[i]
            vowels = 0
        }
        maxVowel = Math.max(maxVowel, vowels)
        maxConsonant = Math.max(maxConsonant, consonants)


    }
    return maxConsonant + maxVowel
};
