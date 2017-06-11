import Message from './Message'
import Image from './Image'
import Timer from './Timer'

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

  function compare(char){ 
    let index = randWord.indexOf(char);
    if(index > -1){ 
      replaceAllIndexes(char);
      let not_complete = spaces.includes("_");
      if(!not_complete){
        Message.init(true);
        reset();
      }
    }else{
      wrong++;
      wrongElem.value += char;
      Image.init(wrong);
      if(wrong === 10){
        Message.init(false);
        reset();
      }
    }
  }

  function replaceAllIndexes(char) { 
      let i = randWord.indexOf(char);
      while (i !== -1){
        let index = i*2;
        spaces = spaces.substring(0, index) + char + spaces.substring(index+1);
        i = randWord.indexOf(char, i+1);
      }
      answerElem.value = spaces;
  }

  function reset(){
    Timer.stopTimer();
    setTimeout(()=>{
      window.location.reload(true);
    }, 5000);

  }
 

  return {
    init,
    compare,
    reset
  };

})();

export default Spaces;
