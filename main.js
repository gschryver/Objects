// OBJECTS
/* An object is a container for data. It can multiple types of data -
strings, integers, booleans, functions, arrays, etc. 

// Objects follow this pattern: 
OPEN AND CLOSING CURLY BRACES {}
Contains KEYS and VALUES separated by a colon (:)
[PROPERTY]KEY/VALUE pairs are SEPARATED BY A COMMA (,)
DIFFERENTIATED FROM AN ARRAY because ARRAYS are a collection of 
things; OBJECTS are a way to define the details of a SINGLE thing. 
BOTH can be assigned to a variable.

// const food = { 
    type: "Hamburger",
    size: "Small",
    temperature: "Medium rare"
}

// "type:" = property/key, "Hamburger" = value

One powerful aspect of an object is that you can label the data
inside of the container, unlike in an array. 

Example: the number 14 has no meaning in and of itself. You have no
idea what the integer represents until it is assigned a NAME. On 
objects, that is CALLED A KEY. 

// e.g. - my dog 
const maggie = {
    age: 14
}

// WHY?
Objects are the basis of OOP, where everything is represented as
an object to represent data, and to be manipulated by you.

If you want to store more than one thing in a single "container", put them in an array.

// Dot Notation: 
Obtaining a value inside of an object - 
variableContainingTheObject.keyName

Given the following object:

const maggie = {
    age: 14,
    breed: "Chihuahua",
    color: "Tricolor"
}

Output string:
console.log(`Maggie's breed is ${maggie.breed}`)
Integer:
console.log(`Maggie's age is ${maggie.age}`)

// Square bracket for key access
maggie["breed"]
> "Chihuahua"

// Dot notation for key access 
maggie.breed
> "Chihuahua"
*/

// exercise #1
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

// dot notation 
console.log(wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.depth, wardrobe.width)
console.log(`${wardrobe.height}, ${wardrobe.manufacturer}, ${wardrobe.contents}, ${wardrobe.depth}, ${wardrobe.width}`)

// new key on object
wardrobe.material = "Cedar"
console.log(wardrobe)

// exercise 2
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// 1. Dot notation to output all of the dimensions of the Empire State Building 
console.log(`The dimensions of the Empire State Building are as follows: It has ${empireStateBuilding.stories} stories, is ${empireStateBuilding.height} ft in height, and is ${empireStateBuilding.squareFeet} square ft. total. The east/west length is ${empireStateBuilding.eastWestLength} ft, and the north/south length is ${empireStateBuilding.northSouthLength}.`) 

// 2. Square bracket notation to output the remaining 5 properties; create 5 variables with the keys as their values 
empireStateBuilding["address"]
empireStateBuilding["constructionDate"];
empireStateBuilding["owner"];
empireStateBuilding["architect"];
empireStateBuilding["cost"];

const empireAddress = empireStateBuilding["address"];
const empireConDate = empireStateBuilding["constructionDate"];
const empireOwner = empireStateBuilding["owner"];
const empireArchitect = empireStateBuilding["architect"];
const empireCost = empireStateBuilding["cost"];

console.log(empireAddress, empireConDate, empireOwner, empireArchitect, empireCost)


// 3. 
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// part-time 
// i = iterator, shorthand for index. (i++ = i = i + 1 incrementally (addition of one to the variable i))
console.log("Part-time Instructors")
const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime 

for (let i = 0; i < partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i])
}

// full-time 
console.log("Full time instructors")

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime 

for (let i = 0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i])
}

console.log("Full time instructors - Joe & Andy")
console.log(fullTimeInstructors[3])
console.log(fullTimeInstructors[4])