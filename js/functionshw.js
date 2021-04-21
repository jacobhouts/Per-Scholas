
/*      functions homework instructions!
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
Write a function that returns the number of arguments passed to the function when called.
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/

//--------------------------- return largest number in argument of two
function maxOfTwoNumbers(a,b)
{
    if(a>b)
    {
        return a + " is the big tuna."
    }
    else
    {
        return b + " is the big tuna."
    } 
}

//----------------------------- return largest number in argument of three

function maxOfThreeNumbers(a,b,c)
{
    if(a>b&&a>c)
    {
        return a + " is the big tuna"
    }
    else if(b>a&&b>c)
    {
        return b + " is the big tuna"
    } 
    else if(c>a&&c>b)
    {
        return c + " is the the big tuna"
    }
}

//----------------------------return the vowel

function isCharacterAVowel(a) 
{
	if (a=="a" || a=="A"|| a=="e" || a=="E"|| a=="o" || a=="O"|| a=="i"|| a=="I"|| a=="u"|| a=="U")
    {
		return "Your character is " + a + ". It is indeed a vowel";
	} else 
    {
        return "false";
    }
}

//---------------------------- sum and multiply the arrays

function sumArray(num) {
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
  		sum += num[i];
	}
   	return sum;
  }

function multiplyArray(num){
   var multiplies=1;
   for (var i = 0; i <num.length; i++) 
   {
   multiplies*=num[i];
   }return multiplies;
}

//-------------------------- return the number of arguments

function arg(a,b,c) {
    base = Number(a);
    for (var i = 1; i < arguments.length; i++) {
      a += Number(arguments[i]);
    }
    return a;
  }

  //----------------------- reverse the string

  function reverseString(racecar) {
	reverse = []
	for (i=racecar.length-1;i>=0;i--)
    {
		reverse.push(racecar[i]);
	}
	return reverse.join('');
}

//------------------------ find the longest word

function findLongestWord(blah){
    for(let i=0; i<blah.length; i++)
    {
        if(hamster[blah.length-1].length <= blah[i].length) // last word compared to fist word
        {
            let x = blah[i];
            blah[i] = hamster[blah.length-1];
            hamster[blah.length-1]= x; 
        }
    }  
    return hamster[blah.length-1]
}

//------------------------- filter words by length

function filterLongWords(tired)
{
    let newArray = []
    let num = 5
    for (let i = 0; i < tired.length; i++)
    {
        if(tired[i].length>=num)
        {
        newArray.push(tired[i])
        }
    }
    return newArray;
}