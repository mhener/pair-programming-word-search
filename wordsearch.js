//2D array of leters input
//true or false output
//Nested Loop?
//Tests in folder "npm test"
//Vertical and Horizontal words
const transpose = function(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
};
  
const wordSearch = (letters, word) => {
  if (typeof word !== 'string' || word.length <= 0) {
    console.log('no search word given');
    return false;
  }
  if (Array.isArray(letters[0]) === false || letters[0][0].length <= 0 || typeof letters[0][0] !== 'string') {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.split('').reverse().join('').includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word) || l.includes(word.split('').reverse().join(''))) return true;
  }
  return false;
};


module.exports = wordSearch;