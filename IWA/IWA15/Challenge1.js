// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const result = []
const first = data.lists[0][1];
const second = data.lists[1][1] ;
const third = data.lists[2][1]  ;


const extractBiggest = () => {
let biggest = -Infinity;
let biggestList = null;

if (first.length > 0 && first[first.length - 1] > biggest) {
    biggest = first[first.length - 1];
    biggestList = first;
}
if (second.length > 0 && second[second.length - 1] > biggest) {
    biggest = second[second.length - 1];
    biggestList = second;
}
if (third.length > 0 && third[third.length - 1] > biggest) {
    biggest = third[third.length - 1];
    biggestList = third;
}

if (biggestList) {
    const extractedNum = biggestList.pop();
    return extractedNum;
}
};


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)