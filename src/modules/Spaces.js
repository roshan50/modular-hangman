import Message from './Message'
import Image from './Image'
const Spaces = (function(){

  let char;
  let randWord;
  let answerElem;
  let wrongElem;
  let spaces;
  let wrong;

  function init(charId){
    char = charId;
    wrong = 0;
    cacheDom();
    createCorrectSpaces();
    // compare();
  }

  function cacheDom(){
    answerElem = document.querySelector('.answer');
    wrongElem  = document.querySelector('.wrong');
  }

  function createCorrectSpaces(){
    const choices = ["DOG","BOOK","BAG","SHOP","APPLE","HOUSE","LIBRARY","OFFICE"];
    randWord = choices[Math.floor(Math.random() * choices.length)];
    spaces = '';
    for(var i = 0 ; i < randWord.length ; i++){
      spaces +='_,';
    }
    spaces = spaces.slice(0, -1);
    answerElem.value = spaces;
  }

  function compare(){
    let index = randWord.indexOf(char);
    if(index > -1){
      replaceAllIndexes();
      let not_complete = spaces.includes("_");
      if(!not_complete){
        Message.init(true);
        // reset();
      }
    }else{
      wrong++;
      wrongElem.value += char;
      Image.init(wrong);
      if(wrong === 10){
        Message.init(false);
      }
    }
  }

  function replaceAllIndexes() {
      let i = -1;
      let ind = randWord.indexOf(char, i+1)
      while (ind !== -1){
          let index = i*2;
          spaces = spaces.substring(0, index) + char + spaces.substring(index+1);
      }
      answerElem.value = spaces;
  }

  // function putInCorrectSpace(){
  //
  // }
  //
  // function putInWrongSpace(){
  //
  // }
  //
  // function ClearCorrectSpaces(){
  //
  // }
  //
  // function ClearWrongSpaces(){
  //
  // }

  return {
    init
  };

})();

export default Spaces;
