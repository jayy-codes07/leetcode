/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let sortedStudent = students.sort((a, b) => a - b)
    let sortedSeat = seats.sort((a, b) => a - b)
    let position = 0
    for (let i = 0; i < seats.length; i++) {
        position += Math.abs(sortedStudent[i] - sortedSeat[i])
    }

    return position
};
