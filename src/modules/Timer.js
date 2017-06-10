import Message from './Message'
const Timer = (function(){

  let timer;
  let interval;
  function init(){
    setTimer();
  }

  function setTimer(){
    timer = 60*1;
    interval = setInterval(countDown,1000);
  }

  function countDown(){
    timer--;
    showTime();
    if (timer === 0) {
      console.log('game over!');
      stopTimer();
      Message.init(false);
        //  gameOver();
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
    init
  };

})();

export default Timer;
