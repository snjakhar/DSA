/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*1 . Brute force approach

Loop Through the Array: The code goes through each number in the array.
Count Occurrences: For each number, it counts how many times it appears in the array.
Check for Majority: If a number appears more than one-third of the array's length, it's considered a "majority element."
Return Majority Elements: Finally, it gives back a list of all the majority elements found.
 */


const majority1 = function (arr) {

    let count = 1;
    let target = []
    for (let i = 0; i < arr.length; i++) {
        if (!target.includes(arr[i])) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) count++;
            }
            if (count > Math.floor(arr.length / 3)) {
                target.push(arr[i])
            }
            count = 1;
        }

    }
    return target
};


//2. Better Approach using hashMap
var majority2 = function (arr) {

    let count = 1;
    let target = [];
    let hashMap = new Map();
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        const key = arr[i]
        if (hashMap.has(key)) {
            const currentValue = hashMap.get(key)
            hashMap.set(key, currentValue + 1)
        } else {
            hashMap.set(key, 1)
        }
    }


    for (const [key, value] of hashMap) {
        if (value > Math.floor(n / 3)) target.push(key)
    }

    return target
};

/*3.Boyer-Moore Majority Vote algorithm. (Best Approach )
Suppose we need to find the fav color from a group which is fav color ,
Fav color will be more then n/3 time it means fav colot cannot be more then 2
if n =12 , then 2 can be fav color only ,

First will iterate the array then check current ele is equal to ele.
 */
const majority3 = (arr) => {
    let candidate1 = null;
    let candidate2 = null;
    let count1 = 0;
    let count2 = 0;
    let target = []
    for (const ele of arr) {
        if (ele === candidate1) count1++;
        else if (ele === candidate2) count2++
        else if (count1 == 0) candidate1 = ele;
        else if (count2 === 0) candidate2 = ele;
        else {
            count1--
            count2--
        }
    }
    count1 = 0;
    count2 = 0;
    for (const ele of arr) {
        if (ele === candidate2) count2++;
        else if (ele === candidate1) count1++;
    }

    if (count1 > Math.floor(arr.length / 3)) target.push(candidate1)
    if (count2 > Math.floor(arr.length / 3)) target.push(candidate2)
    return target

}