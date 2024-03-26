const textValidation = (expected, actual) => {
  const expectedWords = expected.split(' ');
  const actualWords = actual.split(' ');

  if (expectedWords.length !== actualWords.length) {
    console.log("Expected and Actual is not the same")
  }
 
    for (let i = 0; i < expectedWords.length; i++) {
      if (expectedWords[i] !== actualWords[i]) {
        console.log("Expected:", expectedWords[i], 'Actual:', actualWords[i])
      }
    } 
 
  
  console.log("Expected and Actual is the same");
}


console.log("\ntest #1");
let testData1 = `The quick brown fox jumps over the lazy dog.`;
let testData2 = `The quick brown fox jumps over the lazy dog.`;
textValidation(testData1, testData2);

console.log("\ntest #2");
let testData3 = `The quick brown fox jumps over the lazy dog. S-nature`;
let testData4 = `The quick red fox jumps over the lazy cat. Snature`;
textValidation(testData3, testData4);
