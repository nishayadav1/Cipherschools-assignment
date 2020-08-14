                 // Cipher Schools Assignment

// Very Easy Section
// Question 1
convert =(minutes)=>{
    return minutes*60
}
// console output
let minute = 10
console.log(convert(minute)

// Question 2
divide =(a,b)=>{
    if(a%b===0){
        return true;
    }
    else{
        return false;
    }
}

//console output
let a=20,b=3
console.log(divide(a,b))


// Easy Section 
//Question 1

charCount=(a,b)=>{
    let count=0
    for(i=0;i<b.length;i++){
       if(b[i]==a){
           count++
       }
    }
    return count
}
console.log(charCount ("a", "edabit"))


// Question 2

addup=(a)=>{
    let sum=0
    for (let val = 1; val <= a ; val++) {
        sum=sum+val;
    }
    return sum
}
console.log(addup (10))


// Question 3

replaceVowel=(letter)=>{
    for (let i = 0; i < letter.length; i++) {
        letter=letter.replace('a',1)
        letter=letter.replace('e',2)
        letter=letter.replace('i',3)
        letter=letter.replace('o',4)
        letter=letter.replace('u',5)
    }
    return letter
}

console.log(replaceVowel(("chembur"))


// Medium Section 
// Question 1

function reverseofword(string)
{
	var word =[];
	word = string.split("\s+");
	var value="";
	for(var a = 0; a < word.length; a++)
	{
		return value += word[a].split('').reverse().join('');
	}
}
console.log(reverseofword("peter piper picked pickled peppers", "p"))

// Question 2
jackpot=(array)=>{
    for (let i = 0; i < array.length-1; i++) {
        if(array[i]!==array[i+1]){
            return false
        }
    }
    return true 
}
console.log(jackpot(["SS", "SS", "SS", "SS"]))

// Question 3
removeduplicats=(array1)=>{
    var set1 = new Set(array1);
    arr=Array.from(set1)
    return array1
}
console.log(removedups(["John", "Taylor", "John"]))

// Hard section
// Question 1
realtype=(type)=>{

    return  type.constructor.name
}

checkingnumber=(value)=>{
    for (let i = 0; i < value.length; i++) {
        if(value[i]>=1&&value[i]<=9){
            return true
        }
    }
    return false
}
console.log(realtype(["Hii","Hello"]))

// Question 2
numberinstring=(value)=>{

    val=value.filter((string)=>{
        return checknumber(string)
    })
    return val

}

console.log(numberinstring(["abc", "ab10c", "a10bc", "bcd"])) 

