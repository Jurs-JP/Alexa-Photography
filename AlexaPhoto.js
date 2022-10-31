const spread = document.getElementById('spreadCards');
const cd1 = document.getElementById("card1");
const cd2 = document.getElementById("card2");
const cd3 = document.getElementById("card3");
const cd4 = document.getElementById("card4");

const textBox= document.querySelector('#textBox')

var zIn = 12;
	var allCards = document.querySelectorAll("div.card");
	
	for(let card of allCards){
		
		card.addEventListener("click", ()=> {

		cd1.style.transition = "transform 0.8s ease-in-out"
		cd2.style.transition = "transform 0.4s ease-in-out"
		cd3.style.transition = "transform 1s ease-in-out"
		cd4.style.transition = "transform 0.6s ease-in-out"

		if(window.innerWidth > 1200){
		
		cd1.style.transform = "translate(80%, 60%) rotate(4deg)";
		cd2.style.transform = "translate(200%, 60%) rotate(-1deg)";
		
		cd3.style.transform = "translate(80%, -60%) rotate(-2deg)";
		cd4.style.transform = "translate(200%, -60%) rotate(6deg)";	

		} else {		
	
		cd1.style.transform = "translate(10%, 60%) rotate(4deg)";
		cd2.style.transform = "translate(130%, 60%) rotate(-1deg)";

		cd3.style.transform = "translate(10%, -60%) rotate(-2deg)";
		cd4.style.transform = "translate(130%, -60%) rotate(6deg)";	
		}

	

		textBox.style.opacity = "1";


		if(window.innerWidth > 1200){
			textBox.style.transform = " translate(0%, -30%)"
		} else{
			textBox.style.transform = " translate(0%, -0%)"
		}
		
		textBox.style.borderTop = "1px solid rgb(210,210,210)"
		textBox.style.borderLeft = "1px solid rgb(210,210,210)"
		textBox.style.borderBottom = "1px solid rgb(210,210,210)"
		textBox.style.borderRadius = "15px"
		textBox.style.backgroundColor = "rgb(245,245,245)"
		console.log(`Width: ${window.innerWidth}`)
		console.log(`Height: ${window.innerHeight}`)

			


		cd1.addEventListener("mouseover", () =>{
			cd1.style.transform = "translate(80%, 60%) scale(1.4) rotate(0deg)";
		})
		cd2.addEventListener("mouseover", () =>{
			cd2.style.transform = "translate(200%, 60%) scale(1.4) rotate(0deg)";
		})
		cd3.addEventListener("mouseover", () =>{
			cd3.style.transform = "translate(80%, -60%) scale(1.4) rotate(0deg)";
		})
		cd4.addEventListener("mouseover", () =>{
			cd4.style.transform = "translate(200%, -60%) scale(1.4) rotate(0deg)";
		})
		cd1.addEventListener("mouseout", () =>{ 
			cd1.style.transform = "translate(80%, 60%) rotate(4deg)";
		})
		cd2.addEventListener("mouseout", () =>{ 
			cd2.style.transform = "translate(200%, 60%) rotate(-1deg)";
		})
		cd3.addEventListener("mouseout", () =>{ 
			cd3.style.transform = "translate(80%, -60%) rotate(-3deg)";
		})
		cd4.addEventListener("mouseout", () =>{ 
			cd4.style.transform = "translate(200%, -60%) rotate(6deg)";
		})

		
	})

		
}
	


var card= {
	card1: "photo1",
	card2: ""
}


if(window.innerWidth > 1200){
	textBox.style.height= "60vh"

	cd1.style.width = "12vw";
	cd1.style.height = "15vw";

	cd2.style.width = "12vw";
	cd2.style.height = "15vw";

	cd3.style.width = "12vw";
	cd3.style.height = "15vw";

	cd4.style.width = "12vw";
	cd4.style.height = "15vw";
} else {
	textBox.style.height= "25vh"
	textBox.style.transform = "translate(100%, 20%)";

	document.querySelector('section').style.maxHeight = "50vh";
	document.querySelector('#cardsBox1').style.height = '40vw';

	cd1.style.width = "21vw";
	cd1.style.height = "28vw";

	cd2.style.width = "21vw";
	cd2.style.height = "28vw";

	cd3.style.width = "21vw";
	cd3.style.height = "28vw";

	cd4.style.width = "21vw";
	cd4.style.height = "28vw";
}



// percentage height for pictures should fit 
// 70% of screen height if in landscape