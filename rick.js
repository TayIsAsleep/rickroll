try{clearInterval(t);}catch(error){}
var t=setInterval(function(){
	let l = "https://tinyurl.com/2thp8jaa"
	document.querySelectorAll("img").forEach(e=>{
		if (e.src != l){
			e.src=l
		}
	})
	document.querySelectorAll(".guildIcon-2Tpnad").forEach(e=>{
		if (e.style.backgroundImage != `url(${l})`){
			e.style.backgroundImage=`url(${l})`
		}	
	})
	
	document.querySelectorAll(".embedMedia-1guQoW, .messageAttachment-1aDidq").forEach(e=>{
		let a = document.createElement("img")
		a.src = l
		e.replaceWith(a)
	})

	document.querySelectorAll(".overflow-WK9Ogt, .messageContent-2qWWxC").forEach(e=>{
		e.innerHTML = "You got Rick Rolled!"
	})
},100);
