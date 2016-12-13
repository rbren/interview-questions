module.exports = function(matrix) {
  let longestPaths = matrix.map(row => {
    return row.map(cell => null);
  });
  let longestPath = [];
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      let path = setLongestPathForCell(matrix, i, j, longestPaths);
      if (path.length > longestPath.length) longestPath = path;
    }
  }
  return longestPath;
}

function setLongestPathForCell(matrix, i, j, longestPaths) {
  if (longestPaths[i][j]) return longestPaths[i][j];
  let num = matrix[i][j];
  let path = longestPaths[i][j] = [num];
  let extension = [];
  if (i > 0 && matrix[i-1][j] === num + 1) {
    extension = setLongestPathForCell(matrix, i-1, j, longestPaths);
  }
  if (i + 1 < matrix.length && matrix[i+1][j] === num + 1) {
    let nextExtension = setLongestPathForCell(matrix, i+1, j, longestPaths);
    if (nextExtension.length > extension.length) extension = nextExtension;
  }
  if (j > 0 && matrix[i][j-1] === num + 1) {
    let nextExtension = setLongestPathForCell(matrix, i, j-1, longestPaths);
    if (nextExtension.length > extension.length) extension = nextExtension;
  }
  if (j + 1 < matrix[i].length && matrix[i][j+1] === num + 1) {
    let nextExtension = setLongestPathForCell(matrix, i, j+1, longestPaths);
    if (nextExtension.length > extension.length) extension = nextExtension;
  }
  return longestPaths[i][j] = path.concat(extension);
}
