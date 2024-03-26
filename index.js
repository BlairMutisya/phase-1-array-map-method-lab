const tutorials = [
  'what does the this keyword mean?',
  "What Is The Constructor OO Pattern?",
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Assuming tutorials is a global variable containing an array of strings

function titleCased() {
  return tutorials.map(tutorial => {
    // Split the tutorial name into an array of words
    let words = tutorial.split(' ');
    // Capitalize the first letter of each word
    words = words.map(word => {
      // Capitalize the first letter and convert the rest to lowercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    // Join the title-cased words back into a single string
    return words.join(' ');
  });
}

