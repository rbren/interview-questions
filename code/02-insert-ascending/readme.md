# Insert Ascending

This one is a little trickier. Your input will be a sorted list of integers,
along with a new number to insert in the list.

However, the integers will be given to you as a list of their *differences*.
That is, `differences[0] == list[0]`, `differences[1] = list[1] - list[0]`,
`differences[2] = list[2] - list[1]`, etc. For example,
`[1,2,4,8]` would be stored as `[1,1,2,4]`.

Write a function that takes in this list of differences, along with a new number to insert,
and returns the new list of differences.

## Example
* Input
  * differences: [1, 1, 2, 4]
  * number: 7
* Output
  * [1, 1, 2, 3, 1]
