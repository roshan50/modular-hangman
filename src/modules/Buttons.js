import Spaces from './Spaces'
import Timer from './Timer'
import Image from './Image'

const Buttons = (function(){

  let startBtn;
  let charBtns;
  let charBtn;

  function init(){
    cacheDom(); 
    enableStart();
    addEventListener(startBtn,start);
  }

  function cacheDom(){
    startBtn = document.querySelector(".start");
    // charBtn = document.querySelector(".btn-default");
    charBtns = document.querySelectorAll(".btn-default");
  }

  function disableStart(){
    startBtn.disabled = true;
  }

  function enableStart(){
    startBtn.disabled = false;
  }

  function disableAllChars(){
    for(var i = 0; i < charBtns.length; i++){
      charBtns[i].disabled = true;
    }
  }

  function enableAllChars(){
    for(var i = 0; i < charBtns.length; i++){
      charBtns[i].disabled = false;
    }
  }

  function disableOneChar(btn) {
    btn.disabled = true;
  }

  function enableOneChar(btn){
    btn.disabled = false;
  }

  function addEventListener(btn,btnFunc){
    btn.addEventListener("click", btnFunc);
  }

  function removeEventListner(btn,btnFunc) {
    btn.removeEventListener("click", btnFunc);
  }

  function start(){
    Timer.init();
    disableStart();
    enableAllChars();
    Image.init(1);
    for(var i = 0; i < charBtns.length; i++){
      charBtns[i].addEventListener("click",selectChar);
    }
    Spaces.init();
  }

  function selectChar(){
    disableOneChar(this);
    Spaces.compare(this.id);
  }


  return {
    init
  };

})();

export default Buttons;
