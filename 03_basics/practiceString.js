// Way to declare the string
const string1 = "Data Deiver";
const string2 = 'Aditya Kumar Singh';
const string3 = `I am Aditya Kumar Singh`;
// Declare String as a object
const string4 = new String("Aditya Is Object");

//Play with string
const str1 = "Data_Deiver";
console.log("The type of str1:",typeof str1);
console.log("The type of str1:",typeof[str1]);

console.log("The total character in str1:",str1.length);

console.log("The Upper form of str1:",str1.toUpperCase());

console.log("The Lower form of str1:",str1.toLowerCase());

//Indexing
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
//Other Way
console.log(str1.charAt(4));
console.log(str1.charAt(5));
console.log(str1.charAt(6));
console.log(str1.charAt(7));

//Comparison between string in form of object declaration
const s1 = "2 + 2" 
const s2 = new String("2 + 2"); 
console.log(eval(s1)); // 4
console.log(eval(s2)); // "2 + 2"
console.log(typeof s1); //String
console.log(typeof s2); //Object

//Concat
const str2 = "Hello";
const str3 = "World";

console.log(str1.concat(" ", str2));
// "Hello World"

console.log(str2.concat(", ", str1));
//"World, Hello"

//SearchOf
const para1 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ";

const searchTerm = "amet";
const indexOfFirst = para1.indexOf(searchTerm);
console.log(indexOfFirst);

//Replace
const para2 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

console.log(para2.replace("dolor", "Aditya")); // "Lorem ipsum Aditya sit amet consectetur, adipisicing elit."

//Slice
const str5 = "The quick brown fox jumps over the lazy dog.";

console.log(str5.slice(31)); // "the lazy dog."

console.log(str5.slice(4, 19)); // "quick brown fox"

console.log(str5.slice(-4)); // "dog."

console.log(str5.slice(-9, -5)); // "lazy"

//Split
const str6 = "The quick brown fox jumps over the lazy dog.";

const words = str6.split(" ");
console.log(words[3]);  // "fox"

const chars = str6.split("");
console.log(chars[8]);  // "k"

const strCopy = str6.split();
console.log(strCopy);  // Array ["The quick brown fox jumps over the lazy dog."]

//Substring
const str = "Mozilla";

console.log(str.substring(1, 3)); //output: "oz"
console.log(str.substring(2));  //Expected output: "zilla"

//substr
console.log(str.substr(1, 3)); //output: "ozi"
console.log(str.substr(2));  //Expected output: "zilla"

//trim
const greeting = "   Hello world!   ";

console.log(greeting);  //"   Hello world!   "

console.log(greeting.trim());  //"Hello world!"

//Include
const url = "https://improved-space-train-v65777jx5r7whwjg7.github.dev/";
url.includes('train');  // It will we check train is a available in url or not






