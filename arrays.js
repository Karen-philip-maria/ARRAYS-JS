// 1. Find the last element of the following array.arr1=[3,7,34,90,12] arr2=[tru,"green","where",12,56]

let numbers=[3, 7, 34, 90,12];
console.log("Last item", numbers.slice(-1));

let operation=[true,"green","wher",12, 56];
console.log("Last item", operation.slice(-1));

// 2.  Write a JS program that will join the following array elements into a stringmyPets=["cow","Bird","Snake","Dog"];
let arr1=["Cow","Bird"];
let arr2=["Snake","Dog"];
let myPets=arr1.concat(arr2);
console.log({myPets});

// 3. Write a JS script to sort the following array itemsvar arr3=[-5,9,5,3,2,-3,6,8,4,1];
let arr3=[-5, 9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);

// 4. Write a program to remove duplicates from the following array. console the array without duplicates, and console another array that only contains duplicates
//let arr =["boy", "man", "girl",              "school","girl", "woman"];
let arr = ["boy","man","girl","school","girl","woman"];
let data1 = [];
let duplicates = [];
arr.forEach(data =>{
    if (data1.includes(data)) {
        data1.push(data);
    }
    else(duplicates.push(data));
});
console.log({data1});
console.log({duplicates});

// 5. Write a JS  script to search for the following word in the array."If food"If the word is present,
//return it else return "the search word was not found "let arr5=["the","way","x",4];
 let array= ["the", "way", "x", 4];
let arrs = ["the","way","x",4];
const word = "food";
const wordIndex = arrs.indexOf(word);
if (word==array[1]){console.log({word})};
 {console.log("the search was not found")};

// 6.  Write a JS script to sort the following string:let word ="renniw"
let words = "renniw";
let newWord = function(word){
    return word.split('').sort().join('');
};
console.log(newWord(words))

// 7. Using an array of fruits with length 10, insert "Tomato" at the 5th index
let fruits=["Mango", "Apple","Pineapple","Orange","Pear","Banana","Pawpaw","Lemon","Graphes","plums"];
 fruits[5] = "Tomato";
 console.log({fruits});