// Exercise #8 - Calculator: 

const add = function(a,b) {
	return a + b
};

console.log(add(1,2) === 3 ? "Passes" : "Fails")

const subtract = function(a,b) {
	return a - b
};

console.log(subtract(1,2) === -1 ? "Passes" : "Fails")

let numbers = [1,2,3,4,5]

const sum = function(numbers) {
  return numbers.reduce(function(acc,cur) {
    return acc + cur});
  }
console.log(sum(numbers) === 15 ? "Passes" : "Fails")

const multiply = function(a,b) {
  return a * b
};

console.log(multiply(3,2) === 6 ? "Passes" : "Fails")

const power = function(a,b) {
	return a ** b
};

console.log(power(3,2) === 9 ? "Passes" : "Fails")

const factorial = function(num) {
  let result = num 

	if (num === 0 || num === 1)
    return 1;

  while (num > 1) {
    num--;
    result *= num
  }

  return result
};

console.log(factorial(5) === 120 ? "Passes" : "Fails")

console.log("All functions have passed for exercise 8.")

// Exercise #9 - Palindromes:

const palindromes = function (word) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  cleanedWord = word
  .split('')
  .filter((character) => alphanumerical.includes(character))
  .join('');

  forward = cleanedWord.toLowerCase();
  backward = forward.split('').reverse().join('');

  if (forward === backward) {
    return true
  }
  return false
};

console.log(palindromes("RACECAR"))

console.log("All functions have passed for exercise 9.")

// Exercise 10 - Fibonacci:

const fibonacci = function(num) {
  sequence = [ ]
  pointerOne = 0
  pointerTwo = 1

  if (Number.isInteger(num) === true) {
    for (let i = 0; i < num; i++) {
      sequence.push(pointerTwo)

      pointerTwo = pointerOne + pointerTwo
      pointerOne = sequence[i]

    }

    console.log(sequence)
    return sequence[num - 1]
    
  } else
    console.log("Not a valid input.")
};

console.log(fibonacci(6) === 8 ? "Passes" : "Fails")

console.log("All functions have passed for exercise 10.")

// Exercise 11 - Get The Titles:

const books = [
  {
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
  },
  {
    title: 'The Drunkard',
    author: 'Liu Yichang'
  }
]

const getTheTitles = function(books) {
  return books.map(function(book) {
    return book.title});
  }

console.log(getTheTitles(books))

console.log("All functions have passed for exercise 11.")

// Exercise 12 - Find the Oldest:

const people = [
  {
    name: 'Joe',
    birthYear: '2000',
    deathYear: '2100',
  },
  {
    name: 'Greg',
    birthYear: '2000',
    deathYear: '2101',
  },
  {
    name: 'Craig',
    birthYear: '2000',
    deathYear: '2010',
  },
  {
    name: 'Mike',
    birthYear: '2000',
    deathYear: '2002',
  }
]

const getAge = function (birthYear,deathYear) {
  return deathYear - birthYear
}

let findTheOldest = function(people) {
  let total = 0
  let oldest = {}
  people.reduce((prevPerson, curPerson) => {
    if ((curPerson.deathYear - curPerson.birthYear) > total) {
      total = (curPerson.deathYear - curPerson.birthYear);
      oldest = curPerson
    }
    return prevPerson;
  })
  return oldest
}

console.log(findTheOldest(people))

console.log("All functions have passed for exercise 12.")