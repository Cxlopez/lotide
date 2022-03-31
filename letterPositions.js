const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!result[sentence[i]]) {
      result[sentence[i]] = [];
    }
    result[sentence[i]].push(i);
  }

  delete result[" "];
  return result;
};

let random = "hello im hungry";
console.log(letterPositions(random));