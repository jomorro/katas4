const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


//kata 1
const kata1 = document.createElement("h2");
kata1.textContent = "1. Display an array from the cities in gotCitiesCSV";
document.body.appendChild(kata1);
const gotCitiesArray = JSON.stringify(gotCitiesCSV.split(","));
const div1 = document.createElement("div");
div1.textContent = gotCitiesArray
document.body.appendChild(div1);

//kata 2
const kata2 = document.createElement("h2");
kata2.textContent = "2. Display an array of words form the sentence in bestThing";
document.body.appendChild(kata2);
const bestThingArray = JSON.stringify(bestThing.split(" "));
const div2 = document.createElement("div");
div2.textContent = bestThingArray;
document.body.appendChild(div2);

//kata 3
const kata3 = document.createElement("h2");
kata3.textContent = "3. Display a string separated by semi-colons instead of commas from gotCitiesCSV";
document.body.appendChild(kata3);
const gotCitiesString = gotCitiesCSV.split(",").join("; ");
const div3 = document.createElement("div");
div3.textContent = gotCitiesString;
document.body.appendChild(div3);

//kata 4
const kata4 = document.createElement("h2");
kata4.textContent = "4. Display a CSV (comma-separated) string from the lotrCitiesArray";
document.body.appendChild(kata4);
const lotrCitiesString = lotrCitiesArray.join(", ");
const div4 = document.createElement("div");
div4.textContent = lotrCitiesString;
document.body.appendChild(div4);

//kata 5
const kata5 = document.createElement("h2");
kata5.textContent = "5. Display the first 5 cities in lotrCitiesArray";
document.body.appendChild(kata5);
const lotrCities5 = JSON.stringify(lotrCitiesArray.slice(0, 5));
const div5 = document.createElement("div");
div5.textContent = lotrCities5;
document.body.appendChild(div5);

//kata 6
const kata6 = document.createElement("h2");
kata6.textContent = "6. Display the last 5 cities in the lotrCitiesArray";
document.body.appendChild(kata6);
const lotrCitiesLast = JSON.stringify(lotrCitiesArray.slice(-5));
const div6 = document.createElement("div");
div6.textContent = lotrCitiesLast;
document.body.appendChild(div6);

//kata 7
const kata7 = document.createElement("h2");
kata7.textContent = "7. Display the 3rd to 5th city in lotrCitiesArray";
document.body.appendChild(kata7);
const lotrCities36 = JSON.stringify(lotrCitiesArray.slice(3, 6));
const div7 = document.createElement("div");
div7.textContent = lotrCities36;
document.body.appendChild(div7);

//kata 8
const kata8 = document.createElement("h2");
kata8.textContent = "8. Using splice, remove 'Rohan' from lotrCitiesArray";
document.body.appendChild(kata8);
lotrCitiesArray.splice(2, 1)
const div8 = document.createElement("div");
div8.textContent = lotrCitiesArray;
document.body.appendChild(div8);


//kata 9
const kata9 = document.createElement("h2");
kata9.textContent = "9. Using splice, remove all cities after 'Dead Marshes' in lotrCitiesArray";
document.body.appendChild(kata9);
JSON.stringify(lotrCitiesArray.splice(5, 2));
const div9 = document.createElement("div");
div9.textContent = lotrCitiesArray;
document.body.appendChild(div9);

//kata 10
const kata10 = document.createElement("h2");
kata10.textContent = "10. Using splice, add 'Rohan' back to lotrCitiesArray right after 'Gondor'"
document.body.appendChild(kata10);
lotrCitiesArray.splice(2, 0, "Rohan");
const div10 = document.createElement("div");
div10.textContent = JSON.stringify(lotrCitiesArray);
document.body.appendChild(div10);

//kata 11
const kata11 = document.createElement("h2");
kata11.textContent = "11. Using splice, rename 'Dead Marshes' to 'Deadest Marshes' in lotrCitiesArray"
document.body.appendChild(kata11);
lotrCitiesArray.splice(-1, 1, "Deadest Marshes");
const div11 = document.createElement("div");
div11.textContent = JSON.stringify(lotrCitiesArray);
document.body.appendChild(div11);

//kata 12
const kata12 = document.createElement("h2");
kata12.textContent = "12. Using slice, display the first 14 characters from bestThing";
document.body.appendChild(kata12);
const bestThingFirst14 = bestThing.slice(0, 14);
const div12 = document.createElement("div");
div12.textContent = bestThingFirst14;
document.body.appendChild(div12);

//kata 13 
const kata13 = document.createElement("h2");
kata13.textContent = "13. Using slice, display the last 12 characters from bestThing";
document.body.appendChild(kata13);
const bestThingLast12 = bestThing.slice(-12);
const div13 = document.createElement("div");
div13.textContent = bestThingLast12;
document.body.appendChild(div13);

//kata 14
const kata14 = document.createElement("h2");
kata14.textContent = "14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., 'boolean is even'";
document.body.appendChild(kata14);
const bestThingMiddle = bestThing.slice(23, 38);
const div14 = document.createElement("div");
div14.textContent = bestThingMiddle;
document.body.appendChild(div14);

//kata 15 
const kata15 = document.createElement("h2");
kata15.textContent = "15. Repeat #13 using substring instead of slice";
document.body.appendChild(kata15);
const bestThingLastAgain = bestThing.substring(bestThing.length - 12);
const div15 = document.createElement("div");
div15.textContent = bestThingLastAgain;
document.body.appendChild(div15);

//kata 16
const kata16 = document.createElement("h2");
kata16.textContent = "16. Repeat #14 using substr instead of slice";
document.body.appendChild(kata16);
const bestThingMiddleAgain = bestThing.substring(23, 38);
const div16 = document.createElement("div");
div16.textContent = bestThingMiddleAgain;
document.body.appendChild(div16);

//kata 17
const kata17 = document.createElement("h2");
kata17.textContent = "17. Find and display the index of 'only' in bestThing"
document.body.appendChild(kata17);
const bestThingIndexOnly = bestThing.indexOf("only");
const div17 = document.createElement("div");
div17.textContent = bestThingIndexOnly;
document.body.appendChild(div17);

//kata 18
const kata18 = document.createElement("h2");
kata18.textContent = "18. Find and display the index of the last word in bestThing";
document.body.appendChild(kata18);
const BestThingIndexLast = bestThing.lastIndexOf(" ") + 1;
const div18 = document.createElement("div");
div18.textContent = BestThingIndexLast;
document.body.appendChild(div18);

//kata 19
const kata19 = document.createElement("h2");
kata19.textContent = "19. Find and display all cities from gotCitiesCSV  that use double vowels ('aa','ee', etc.)";
document.body.appendChild(kata19);
const gotCitiesSplit = gotCitiesCSV.split(",");
gotCitiesSplit.filter(match => /([a-z])\1+/.test(match));
const div19 = document.createElement("div");
div19.textContent = gotCitiesSplit;
document.body.appendChild(div19);


//kata 20
const kata20 = document.createElement("h2");
kata20.textContent = "20. Find and display all cities from lotrCitiesArray that end with 'or'";
document.body.appendChild(kata20);
const lotrCitiesOr = JSON.stringify(lotrCitiesArray.filter(match => match.endsWith("or")));
const div20 = document.createElement("div");
div20.textContent = lotrCitiesOr;
document.body.appendChild(div20);

//kata 21
const kata21 = document.createElement("h2");
kata21.textContent = "21. Find and display all the words in bestThing that start with a 'b'";
document.body.appendChild(kata21);
const bestThingFunction = () => {
    let bWord = bestThing.split(" ");
    return bWord.filter(word => word.startsWith("b"));
}
const div21 = document.createElement("div");
div21.textContent = bestThingFunction();
document.body.appendChild(div21);

//kata 22
const kata22 = document.createElement("h2");
kata22.textContent = "22. Display 'Yes' or 'No' if lotrCitiesArray includes 'Mirkwood'";
document.body.appendChild(kata22);
const yesOrNo = lotrCitiesArray.indexOf("Mirkwood");
let Mirkwood = "";
if (yesOrNo >= 0) {
    Mirkwood = "Yes";
} else {
    Mirkwood = "No"
}
const div22 = document.createElement("div");
div22.textContent = Mirkwood;
document.body.appendChild(div22);

//kata 23
const kata23 = document.createElement("h2");
kata23.textContent = "23. Display 'Yes' or 'No' if lotrCitiesArray includes 'Hollywood'";
document.body.appendChild(kata23);
const yesNo = lotrCitiesArray.indexOf("Hollywood");
let Hollywood = "";
if (yesNo >= 0) {
    Hollywood = "Yes"
} else {
    Hollywood = "No"
}
const div23 = document.createElement("div");
div23.textContent = Hollywood;
document.body.appendChild(div23);

//kata 24
const kata24 = document.createElement("h2");
kata24.textContent = "24. Display the index of 'Mirkwood' in lotrCitiesArray";
document.body.appendChild(kata24);
const indexOfMirkwood = lotrCitiesArray.indexOf("Mirkwood");
const div24 = document.createElement("div");
div24.textContent = indexOfMirkwood;
document.body.appendChild(div24);

//kata 25
const kata25 = document.createElement("h2");
kata25.textContent = "25. Find and display the first city in lotrCitiesArray that has more than one word";
document.body.appendChild(kata25);
const lotrCitiesMore = lotrCitiesArray.find(multiple => multiple.includes(" "));
const div25 = document.createElement("div");
div25.textContent = lotrCitiesMore;
document.body.appendChild(div25);

//kata 26
const kata26 = document.createElement("h2");
kata26.textContent = "26. Reverse the order in lotrCitiesArray";
document.body.appendChild(kata26);
const div26 = document.createElement("div");
div26.textContent = lotrCitiesArray.reverse();
document.body.appendChild(div26);

//kata 27
const kata27 = document.createElement("h2");
kata27.textContent = "27. Sort lotrCitiesArray alphabetically";
document.body.appendChild(kata27);
const div27 = document.createElement("div");
div27.textContent = lotrCitiesArray.sort();
document.body.appendChild(div27);

//kata 28
const kata28 = document.createElement("h2");
kata28.textContent = "28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)";
document.body.appendChild(kata28);
const div28 = document.createElement("div");
div28.textContent = lotrCitiesArray.sort((a, b) => a.length > b.length);
document.body.appendChild(div28);

//kata 29
const kata29 = document.createElement("h2");
kata29.textContent = "29. Using pop, remove the last city from lotrCitiesArray";
document.body.appendChild(kata29);
lotrCitiesArray.pop();
const div29 = document.createElement("div");
div29.textContent = lotrCitiesArray;
document.body.appendChild(div29);

//kata 30
const kata30 = document.createElement("h2");
kata30.textContent = "30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array";
document.body.appendChild(kata30);
lotrCitiesArray.push("Deadest Marshes");
const div30 = document.createElement("div");
div30.textContent = lotrCitiesArray;
document.body.appendChild(div30);

//kata 31
const kata31 = document.createElement("h2");
kata31.textContent = "31. Using shift, remove the first city from lotrCitiesArray";
document.body.appendChild(kata31);
lotrCitiesArray.shift();
const div31 = document.createElement("div");
div31.textContent = lotrCitiesArray;
document.body.appendChild(div31);

//kata 32 
const kata32 = document.createElement("h2");
kata32.textContent = "32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array";
document.body.appendChild(kata32);
lotrCitiesArray.unshift("Rohan");
const div32 = document.createElement("div");
div32.textContent = lotrCitiesArray;
document.body.appendChild(div32);