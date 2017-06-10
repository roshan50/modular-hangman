const Message = (function(){

	let status;
	let messageElement;

	function init(stats){
		if (stats) {
			if (typeof stats === "string") {
			if (stats === "win") {
				status = true;
			}else{
				status = false;
			}
		}
		if (typeof stats === 'boolean') {
			status = stats;
		}else{
			throw new Error("stats is not defined!!")
		}
	}
		

		
		render();
		cacheDom();
		animate();

	}

	function message() {
		return (status) ? "u have won" : "u have lost";
	}

	function color(){
		return (status) ? "green" : "red";
	}

	function build(){
		return  `
				<div class="messages" style="background-color : ${color()};">${message()}</div>
				`;
	}

	function render(){

		let template = build();
		let parent = document.querySelector('.message-div');
		parent.innerHTML=template;
	}

	function cacheDom(){
		messageElement = document.querySelector('.message-div');
	}

	function animate(){ 
		let pos = -150;
		let id = setInterval(function() {
			if (pos === 5) {
      			clearInterval(id);
	   		}
			pos++;
	      	messageElement.style.top = pos + 'px';
		}, 15);
	}   

	return {
		init
	};

})();

export default Message;
