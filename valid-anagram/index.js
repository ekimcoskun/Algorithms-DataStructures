/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false 
*/

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const countS = {};
    const countT = {};

    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for (let char in countS) {
        if (countS[char] !== countT[char]) {
            return false;
        }
    }
    return true;
};

isAnagram("anagram", "nagaram"); // true
isAnagram("rat", "car"); // false
isAnagram("ab", "a"); // false 
isAnagram("aacc", "ccac") // false 