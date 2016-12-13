# Basic Sort
Write a function that sorts an array of integers.

Use any language and sorting algorithm of your choice.

## Tips
* Name the sorting algorithm you're using
* Mention `O(n*log(n))` complexity
* Know how to do:
  * Quicksort
  * Merge sort
  * Bubble sort

## Links
https://en.wikipedia.org/wiki/Sorting_algorithm





# Insert Ascending

This one is a little trickier. Your input will be a sorted list of integers,
along with a new number to insert in the list.

However, the integers will be given to you as a list of their *differences*.
That is, `differences[0] == list[0]`, `differences[1] = list[1] - list[0]`,
`differences[2] = list[2] - list[1]`, etc. For example,
`[1,2,4,8]` would be stored as `[1,1,2,4]`.

Write a function that takes in this list of differences, along with a new number to insert,
and returns the new list of differences.





# Letter Counts

Some English words contain the same letter more than once, e.g.
the word "therefore" contains the letter E three times.

Given a chunk of English text, find the word with the most occurrences of a single letter.

For exaple, with input "O Romeo, Romeo! Wherefore art thou Romeo?" you should return "Wherefore",
since that contains three Es.

## Tips:
* Ask clarifying questions
  * What to do in the event of a tie?
  * Are capital and lower case letters the same?





# Binary Palindromes
Determine whether an input number is a palindrome when represented in binary.

For example, the number `7` is represented as `111`, which is a palindrome, but
the number `6` is represented as `110`, which is not.

## Tips
* What about negative numbers?
* Two strategies:
  * Convert to string representation
  * Calculate numerically





# Longest Common Substring

Given two input strings, find the longest substring common to both strings.

For example, given "ABRACADABRA" and "CADENCE", you should return "CAD".

## Tips
* Try a naive solution before worrying about time complexity
* Discuss the big-O complexity of your solution
* Bonus: try for an O(n + m) solution





# Longest Path in a Matrix
Given an n by n matrix, find the longest path (moving up, down, left, or right)
of numbers, where each number in the path is one greater than the previous number.

## Example
```
[
  [6, 5, 3],
  [2, 3, 4],
  [5, 4, 7],
]
```

Should output `[2, 3, 4, 5]`. Other valid paths include `[5, 6]`, `[2, 3, 4]`, `[3, 4, 5]`,
but `[2, 3, 4, 5]` is the longest.

## Tips
* Discuss big-O complexity






# First n Primes
Write a function that will take in a number `n` and return the first n primes, starting with 2





# Browser History
Design a class that will record and report a user's browsing history.

Your class should implement the following functions:
* `onPageVisit(url)`
* `navigateBack()`
* `navigateForward()`
* `getHistory(numItems)`
  * If `numItems` is negative, return the previous `numItems+1` pages, including the current page.
  * If `numItems` is positive, return the next `numItems+1` pages, including the current page.
  * If `numItems` is 0, return an array containing only the current page.

## Tips
* Do we have to worry about history length?
  * Discuss likely memory footprint
  * Discuss options for dealing with long histories
* Don't forget to check array bounds






# Reverse Words

Write a function that takes in a bunch of English text,
and reverses each word in the text. Words are separated by spaces.

## Example
Input: Shall I compare thee to a summer's day?
Output: llahS I erapmoc eeht ot a s'remmus ?yad

## Tips
* Discuss big-O complexity
* Can you do it in-place?






# Triplet Sums
Given an array of integers and a target sum, output the number of
triplets in the array whose sum is <= the target sum.

## Example
Input:
  * Array: [3, -2, 1, 3],
  * Target: 5
Output:
  * 3 ([3, -2, 3], [3, -2, 1], and [-2, 1, 3] all sum to <= 5)

## Tips
* Try a naive soulution first
* Try and get complexity to O(n^2)
* How would you generalize your code to handle n-tuples for arbitrary n





