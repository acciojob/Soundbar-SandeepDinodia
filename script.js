//your JS code here. If required.
//your JS code here. If required.
const buttons=document.querySelectorAll('.btn');
const stop=document.querySelector('.stop');

let audio;
buttons.forEach((button)=>{
	button.addEventListener("click", function(){
	     audio=new Audio(`sounds${button.textContent}.mp3`)
	    audio.play();
	});
	
});
stop.addEventListener("click",()=>{
	if(audio){
		audio.pause();
	}
});
