/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]] 
*/

function buildCharMap(string) {
    const charMap = {};
    if (!string) return;
    const splittedString = string.replace(/[^\w]/g, "").toLowerCase().split("");
    splittedString.forEach((item) => {
        if (!charMap[item]) {
            charMap[item] = 1;
        } else {
            charMap[item]++;
        }
    });
    return charMap;
}

const isAnagram = (stringA, stringB) => {
    if (stringA.length !== stringB.length) {
        return false;
    }
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true;
}

const groupAnagrams = function (strs) {
    const anagrams = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        anagrams[sortedStr].push(str);
    }
    return Object.values(anagrams);
};


groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["bat"],["nat","tan"],["ate","eat","tea"]]
groupAnagrams([""]); // [[""]]