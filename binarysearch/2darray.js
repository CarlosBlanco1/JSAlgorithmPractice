/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    var lower = 0;
    var upper = matrix.length - 1;

    var binarySearch = function (row, target) {
        var left = 0;
        var right = row.length - 1;

        while (left <= right) {
            var mid = Math.floor((right + left) / 2);

            if (target == row[mid]) {
                return true
            }
            else if (target > row[mid]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return false;
    }

    if(upper === 0) return binarySearch(matrix[0], target);

    while (lower <= upper) {
        var mid = Math.ceil((upper + lower) / 2);

        if(mid === matrix.length - 1) return binarySearch(matrix[mid - 1], target) || binarySearch(matrix[mid], target) ;
        if(mid === 0) return binarySearch(matrix[mid], target);

        if (target >= matrix[mid - 1][0] && target <= matrix[mid][0]) {
            return binarySearch(matrix[mid - 1], target) || binarySearch(matrix[mid], target);
        }
        else if (target < matrix[mid - 1][0]) {
            upper = mid - 1;
        }
        else {
            lower = mid + 1;
        }
    }

    return false;
};