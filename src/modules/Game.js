import Buttons from './Buttons'
import Message from './Message'
import Image from './Image'
import Timer from './Timer'
import Spaces from './Spaces'

const Game = (function(){

  let randWord;

  function init(){
    Buttons.init();
  }


  function compare(char){ 
    let isCorrect = Spaces.IsCorrectChar(char);

    if(isCorrect){ 
      Spaces.putInCorrectSpace(char);
      
      let not_complete = Spaces.IsCompleted();
      if(not_complete){
        Message.init(true);
        reset();
      }
    }else{
      let wrong = Spaces.putInWrongSpace(char);
      Image.init(wrong);
      if(wrong === 10){
        Message.init(false);
        reset();
      }
    }
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

export default Game;