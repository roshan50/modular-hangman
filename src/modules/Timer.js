import Message from './Message'
import Spaces from './Spaces'

const Timer = (function(){

  let timer;
  let interval;
  function init(){
    setTimer();
  }

  function setTimer(){
    timer = 60*10;
    interval = setInterval(countDown,1000);
  }

  function countDown(){
    timer--;
    showTime();
    if (timer === 0) {
      stopTimer();
      Message.init(false);
      Spaces.reset();
    }
  }

  function showTime(){
    let min = parseInt(timer / 60)
    let sec = parseInt(timer % 60);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let time = min + ':' + sec;
    document.querySelector('.timer').innerHTML = time;
  }

  function stopTimer() {
    clearInterval(interval);
  }

  return {
    init,
    stopTimer
  };

})();

export default Timer;
