const spread = document.getElementById('spreadCards');
const cd1 = document.getElementById("card1");
const cd2 = document.getElementById("card2");
const cd3 = document.getElementById("card3");
const cd4 = document.getElementById("card4");


var zIn = 12;
	var allCards = document.querySelectorAll("div.card");
	
	for(let card of allCards){
		
		card.addEventListener("click", ()=> {

		
	cd1.style.transform = "translate(25vw) rotate(4deg)";
	cd2.style.transform = "translate(-25vw) rotate(-1deg)";

	cd3.style.transform = "translate(9vw) rotate(-2deg)";
	cd4.style.transform = "translate(-9vw) rotate(6deg)";	
	
		zIn++
	card.style.transform = "translate(1px) scale(1.4)" ; 

	card.style.zIndex = zIn;
		
		})
		card.addEventListener("dblclick", ()=>{
			cd1.style.transform = "translate(25vw) rotate(4deg)";
			cd2.style.transform = "translate(-25vw) rotate(-1deg)";

			cd3.style.transform = "translate(9vw) rotate(-2deg)";
			cd4.style.transform = "translate(-9vw) rotate(6deg)";		
				})
	}
	


var card= {
	card1: "photo1",
	card2: ""
}
