const Buttons = (function(){}

  let startBtn;
  let charBtns;
  let charBtn;

  function init(){

  }

  function cacheDom(){
    startBtn = document.querySelector("start");
    charBtn = document.querySelector(".btn-default");
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

  function disableOneChar() {
    charBtn.disabled = true;
  }

  function enableOneChar(){
    charBtn.disabled = false;
  }

  function addEventListener(){

  }

  function removeEventListner() {

  }


  return {
    init
  };

})();

export default Buttons;
