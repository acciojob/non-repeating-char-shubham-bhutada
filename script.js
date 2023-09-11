function firstNonRepeatedChar(str) {
 // Write your code here
	let i = 0;
  while (i < str.length) {
    let count = 0;
    let j = 0;
    while (j < str.length) {
      if (str.charAt(i) == str.charAt(j)) {
        count++;
      }
      j++;
    }
    if (count === 1) {
      return str.charAt(i);
    }
    i++;
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
