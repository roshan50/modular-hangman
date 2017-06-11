const Spaces = (function(){

  let randWord;
  let answerElem;
  let wrongElem;
  let spaces;
  let wrong;

  function init(){
    wrong = 0;
    cacheDom();
    chooseWord();
    createCorrectSpaces();
  }

  function cacheDom(){
    answerElem = document.querySelector('.answer');
    wrongElem  = document.querySelector('.wrong');
  }

  function chooseWord(){
    const choices = ["DOG","BOOK","BAG","SHOP","APPLE","HOUSE","LIBRARY","OFFICE"];
    randWord = choices[Math.floor(Math.random() * choices.length)];
  }

  function createCorrectSpaces(){
    spaces = '';
    for(var i = 0 ; i < randWord.length ; i++){
      spaces +='_,';
    }
    spaces = spaces.slice(0, -1);
    answerElem.value = spaces;
  }

  function IsCorrectChar(char){
    let index = randWord.indexOf(char);
    
    return index > -1 ? true : false;
  }

  function putInCorrectSpace(char){
    let i = randWord.indexOf(char);
    while (i !== -1){
      let index = i*2;
      spaces = spaces.substring(0, index) + char + spaces.substring(index+1);
      i = randWord.indexOf(char, i+1);
    }
    answerElem.value = spaces;
  }
  
  function putInWrongSpace(char){
      wrongElem.value += char;
      wrong++;
      return wrong;
  }

  function IsCompleted(argument) {
      let not_complete = spaces.includes("_");
      
      return not_complete ? false : true;
  }
 

  return {
    init,
    IsCorrectChar,
    putInCorrectSpace,
    putInWrongSpace,
    IsCompleted
  };

})();

export default Spaces;
