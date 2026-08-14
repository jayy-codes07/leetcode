/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function (message, bannedWords) {
    let ban = new Set(bannedWords)
    let apperWord = 0
    for (let i = 0; i < message.length; i++) {
        if (ban.has(message[i])) apperWord++
        if (apperWord > 1) return true
    }
    return false
};
