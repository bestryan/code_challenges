// Day 15 24/Apr/23
// Valid Parentheses
var isValid = function (s) {
  const map = { '(': ')', '{': '}', '[': ']' };
  let stack = [];
  for (let ch of s) {
    if (map[ch]) {
      stack.push(map[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      return false;
    }
  }
  return !stack.length;
};

// Day 16 25/Apr/23
// Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// Day 17 26/Apr/23
// Valid Anagram
var isAnagram = function (s, t) {
  let strS = s.split('').sort();
  let strT = t.split('').sort();

  for (let i = 0; i < strS.length; i++) {
    if (strS[i] !== strT[i]) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('anagram', 'nagaram'));

// Day 18 27/Apr/23
// Day 19 28/Apr/23
// Day 20 29/Apr/23
// Day 21 30/Apr/23
