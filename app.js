// create an empty object to hold the words
const words = {
    number: '',
    adjective: '',
    pluralNoun: '',
    adverb: '',
    anotherAdjective: '',
  };
  
  // function to prompt user for each word type and save to words object
  function startMadlib() {
    words.number = prompt('Enter a number:');
    words.adjective = prompt('Enter an adjective:');
    words.pluralNoun = prompt('Enter a plural noun:');
    words.adverb = prompt('Enter an adverb:');
    words.anotherAdjective = prompt('Enter another adjective:');
  }
  console.log(words)
  // call the startMadlib function to prompt for user input
  startMadlib();
  
  // use the words object to create a story and alert it to the user
  const story = `Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb}, which ultimately led them to ${words.anotherAdjective} fame.`;
  
  alert(story);


  

