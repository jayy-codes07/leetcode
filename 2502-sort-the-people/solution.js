/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    // for (let i = 0; i < heights.length; i++) {
    //     for (let j = 0; j < heights.length; j++) {
    //         if (heights[i] > heights[j]) {
    //             let temp = heights[i]
    //             heights[i] = heights[j]
    //             heights[j] = temp

    //             let temp2 = names[i]
    //             names[i] = names[j]
    //             names[j] = temp2

    //         }
    //     }
    // }
    // return names


    let people = names.map((name, idx) => ({
        name: name,
        height: heights[idx]
    }))
    people.sort((a, b) => b.height - a.height)

    return people.map(person => person.name)
};
