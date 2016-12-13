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

