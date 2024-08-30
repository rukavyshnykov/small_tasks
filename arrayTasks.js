function rotateMatrix(matrix) {
    const array = Array(matrix.length).fill('').map(() => {return new Array()})
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            array[i].unshift(matrix[j][i])
        }
    }
    return array
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(rotateMatrix(matrix));

///2

function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 0;

    const dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));

///3

function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];
console.log(mergeIntervals(intervals));

///4
function productExceptSelf(nums) {
    const res = []
    nums.forEach((el, ind) => {
        res.push(nums.reduce((a, b, index) => {
            if(ind === index) {
                return a
            }
            else {
                return a * b
            }
        }))
    })
    return res
  }
  console.log(productExceptSelf([1, 2, 3, 4]));
  // Expected output: [24, 12, 8, 6]