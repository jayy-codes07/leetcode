/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let replaceval = "."
    let replacewith = "[.]"
    return  address.replaceAll(replaceval,replacewith)

};
