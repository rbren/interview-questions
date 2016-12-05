# Basic Sort
Write a function that sorts an array of integers.

Use any language and sorting algorithm of your choice.

## Tips
* Say what sorting algorithm you will use
* Mention `O(n*log(n))` complexity

## Answers

#### javascript - bubble sort
[7, 4
```js
function sort(nums) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
       if (nums[i] > nums[j]) {
         let hold = nums[i];
         nums[i] = nums[j];
         nums[j] = hold;
       }    
    }
  }
}
```
