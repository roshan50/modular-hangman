const Image = (function(){

  let imageNum;
  function init(num){
    imageNum = num;
    load();
  }

  function load(){
    document.querySelector('.image').src = "images/hm"+imageNum+".gif";
  }

  return {
    init
  };

})();

export default Image;
