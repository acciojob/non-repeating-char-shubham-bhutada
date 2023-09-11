function firstNonRepeatedChar(str) {
 // Write your code here
	let i=0, j=1, n=str.length();
	while (i < n) {
		count=1;
		while(j < n) {
		if(str.charAt(i) == str.charAt(j)) {
			count++;
			j++;
			
		} else { 
			if(count == 1)
			{
				return str.charAt(i);
			}
			i = j;
			count = 1;
		}
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
