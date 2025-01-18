// function getShippingCost(country) {
//     switch (country) {
//         case "Australia":
//             return "Shipping to Australia will cost 170 credits";
//             break;
//         case "China":
//             return "Shipping to China will cost 100 credits";
//             break;
//         case "Chile":
//             return "Shipping to Chile will cost 250 credits";
//             break;
//         case "Jamaica":
//             return "Shipping to Jamaica will cost 120 credits";
//             break;
//         default:
//             return "Sorry, there is no delivery to your country";
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"



// const array = ["apple", "peach", "pear", "banana"];
// const lastElementIndex1 = array.length - 1;
// console.log(array[1]);
// const longElements = console.log(array.length);


// function getLastElementMeta(array) {
//     const lastElementIndex1 = array.length - 1;
//     const lastArray = array[lastElementIndex1];
//     const firstArray = array[0];

//     console.log(`[${firstArray} ${lastArray}]`);

// }

// getLastElementMeta(["apple", "peach", "pear", "banana"]); // повертає [3, "banana"]
// getLastElementMeta(["apple", "peach", "pear"]); // повертає [2, "pear"]
// getLastElementMeta(["apple", "peach"]); // повертає [1, "peach"]
// getLastElementMeta(["apple"]); // повертає [0, "apple"]

// function getLength(array) {
//   console.log(array.join("").length);
// }

// getLength(["Mango", "hurries", "to", "the", "train"]);

// function calculateEngravingPrice(message, pricePerWord) {
//     const textLong = message.trim().split(" ").length;
//     console.log(textLong * pricePerWord);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10); //повертає 50
// calculateEngravingPrice("JavaScript is in my blood", 20); //повертає 100

// function getSlice(array, value) {
//   const lastIndex = array.indexOf(value)+1;
//   if (array.indexOf(value)) {
//     console.log(array.slice(0, lastIndex));
//   }
//   else if (array.indexOf(value) === 0) {
//       console.log(array.slice(0, lastIndex));
//     }
//   else {
//     console.log([]);
//   }
// }
// getSlice(["Mango", "Poly", "Ajax"], "Jacob"); // повертає `[]`
// getSlice(["Mango", "Poly", "Ajax"], "Poly"); //повертає `["Mango", "Poly"]
// getSlice(["Mango", "Poly", "Ajax"], "Ajax"); // повертає `["Mango", "Poly", "Ajax"
// getSlice(["Mango", "Poly", "Ajax"], "Mango"); // повертає `["Mango"]

// function createArrayOfNumbers(min, max) {
//     const arrayResult = [];
//   for (let i = min; i <= max; i++) {
//       arrayResult.push(`${i}`);
//     }
//     console.log(arrayResult);
// }
// createArrayOfNumbers(29, 34); // повертає [29, 30, 31, 32, 33, 34]
// createArrayOfNumbers(14, 17); // повертає `[14, 15, 16, 17]

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let result = 0;
//   for (let i = 0; i < order.length; i += 1) {
//    result += order[i];
//   }
//   console.log(result);
// }

// calculateTotalPrice([12, 85, 37, 4]);  // повертає `138`

// function getEvenNumbers(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//      result.push(`${i}`);
//     }
//     else {
//         [];
//    }
// }
// console.log(result);
// }
// getEvenNumbers(3, 11); // повертає [4, 6, 8, 10]
// getEvenNumbers(7, 7); // повертає []
// getEvenNumbers(8, 8); // повертає `[8]`

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item.toLowerCase()} is available to order!`);
//   }
//   else {
//     console.log("Sorry! We are out of stock!");
//   }
// }

// checkStorage(["apple", "plum", "pear"], "plum"); // повертає "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "pLuM"); // повертає "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "carrot"); // повертає "Sorry! We are out of stock!"


// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(`${array1[i]}`);
//     }
//   }
//   console.log(newArray);
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // повертає `[1, 2]`
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // повертає `[10, 30, 40]

// function calculateTotalPrice(order) {
//   let result = 0;
//   for (const resultArray of order) {
//    result += resultArray;
// }
// console.log(result);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([]);

function slugify(title) {
    const slug = title.toLowerCase().split(" ").join("-");
    return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
       return newArray.slice(0, maxLength);
    }
    return newArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


function filterArray(numbers, value) {
    const newArray = [];

    for (const result of numbers) {
        if (result > value) {
            newArray.push(result);
        }
    }
    return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



