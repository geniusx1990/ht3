/* Task 2: Function Composition and Point-Free Style

1. Implement a function called getFullName that takes a person object with firstName and lastName properties. 
The function should return the person's full name in the format "FirstName LastName".
 */

const person = {
    firstName: "Alex",
    lastName: "Ivanov",
  };

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`
}

console.log('Full name:',getFullName(person));

/* 
2. Create a function called filterUniqueWords that takes a string of text and returns an array of unique words, 
sorted in alphabetical order, without using explicit loops. 
Use function composition and point-free style. */

let string = ' Hello World!, Do you like java or JavaScript?. Hello JavaScript'
function filterUniqueWords(string) {
    return string.match(/\b\w+\b/g).filter((word, index, array) => array.indexOf(word) === index).sort();
}

console.log(filterUniqueWords(string))

/* 3. Implement a function called getAverageGrade that takes an array of student objects, 
each containing a name and grades property. The function should return the average grade of all students, 
without modifying the original array or its items. Use function composition and point-free style.
 */

let arr = [
    { id: 1, name: 'Alex', grade: 5 },
    { id: 2, name: 'Ivan', grade: 6 },
    { id: 3, name: 'Anna', grade: 10 },
];

function getAverageGrade(students) {
    return students.map((student) => student.grade).reduce((sum, grade) => sum + grade, 0) / students.length;

}

console.log(getAverageGrade(arr))