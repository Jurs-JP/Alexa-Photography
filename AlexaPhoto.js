const spread = document.getElementById('spreadCards');
const cd1 = document.getElementById("card1");
const cd2 = document.getElementById("card2");
const cd3 = document.getElementById("card3");
const cd4 = document.getElementById("card4");

const textBox= document.querySelector('#textBox')

var zIn = 12;
	var allCards = document.querySelectorAll("div.card");
	
	// for(let card of allCards){
		
// 		card.addEventListener("click", ()=> {

// 		cd1.style.transition = "transform 0.8s ease-in-out"
// 		cd2.style.transition = "transform 0.4s ease-in-out"
// 		cd3.style.transition = "transform 1s ease-in-out"
// 		cd4.style.transition = "transform 0.6s ease-in-out"

// 		if(window.innerWidth > 1200){
		
// 		cd1.style.transform = "translate(80%, 60%) rotate(4deg)";
// 		cd2.style.transform = "translate(200%, 60%) rotate(-1deg)";
		
// 		cd3.style.transform = "translate(80%, -60%) rotate(-2deg)";
// 		cd4.style.transform = "translate(200%, -60%) rotate(6deg)";	

// 		} else {		
	
// 		cd1.style.transform = "translate(10%, 60%) rotate(4deg)";
// 		cd2.style.transform = "translate(130%, 60%) rotate(-1deg)";

// 		cd3.style.transform = "translate(10%, -60%) rotate(-2deg)";
// 		cd4.style.transform = "translate(130%, -60%) rotate(6deg)";	
// 		}

// 		texts.style.opacity = "1";

// 		if(window.innerWidth > 1200){
// 			textBox.style.transform = " translate(0%, -30%)"
// 		} else{
// 			textBox.style.transform = " translate(0%, -0%)"
// 		}
		
		
// 		console.log(`Width: ${window.innerWidth}`)
// 		console.log(`Height: ${window.innerHeight}`)

			


// 		cd1.addEventListener("mouseover", () =>{
// 			cd1.style.transform = "translate(80%, 60%) scale(1.4) rotate(0deg)";
// 		})
// 		cd2.addEventListener("mouseover", () =>{
// 			cd2.style.transform = "translate(200%, 60%) scale(1.4) rotate(0deg)";
// 		})
// 		cd3.addEventListener("mouseover", () =>{
// 			cd3.style.transform = "translate(80%, -60%) scale(1.4) rotate(0deg)";
// 		})
// 		cd4.addEventListener("mouseover", () =>{
// 			cd4.style.transform = "translate(200%, -60%) scale(1.4) rotate(0deg)";
// 		})
// 		cd1.addEventListener("mouseout", () =>{ 
// 			cd1.style.transform = "translate(80%, 60%) rotate(4deg)";
// 		})
// 		cd2.addEventListener("mouseout", () =>{ 
// 			cd2.style.transform = "translate(200%, 60%) rotate(-1deg)";
// 		})
// 		cd3.addEventListener("mouseout", () =>{ 
// 			cd3.style.transform = "translate(80%, -60%) rotate(-3deg)";
// 		})
// 		cd4.addEventListener("mouseout", () =>{ 
// 			cd4.style.transform = "translate(200%, -60%) rotate(6deg)";
// 		})

// 	var picsUrlArr1 = ["('https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
// 						"('https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60')",
// 						"('https://plus.unsplash.com/premium_photo-1664361480215-0614092ca185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')", 
// 						"('https://images.unsplash.com/photo-1549201440-34391ce5ffd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')"];

// 	var picsUrlArr2 = [];
// 	picsUrlArr2.length = picsUrlArr1.length;
// 	setInterval(() => {
		
// 		cd1.style.transition = "opacity 1s ease-in-out";
// 		cd1.style.opacity= "0";

// 		cd2.style.transition = "opacity 1s ease-in-out";
// 		cd2.style.opacity= "0";

// 		cd3.style.transition = "opacity 1s ease-in-out";
// 		cd3.style.opacity= "0";

// 		cd4.style.transition = "opacity 1s ease-in-out";
// 		cd4.style.opacity= "0";
// 			setTimeout(() => {
				
// 				var numPic1 = Math.floor(Math.random() * 4);
// 				var numPic2 = Math.floor(Math.random() * 4);
// 				var numPic3 = Math.floor(Math.random() * 4);
// 				var numPic4 = Math.floor(Math.random() * 4);

// 				cd1.style.opacity= "1";
// 				cd1.style.backgroundImage = `url${picsUrlArr1[numPic1]}`;
				
// 				cd2.style.opacity= "1";
// 				cd2.style.backgroundImage = `url${picsUrlArr1[numPic2]}`;

// 				cd3.style.opacity= "1";
// 				cd3.style.backgroundImage = `url${picsUrlArr1[numPic3]}`;

// 				cd4.style.opacity= "1";
// 				cd4.style.backgroundImage = `url${picsUrlArr1[numPic4]}`;
				
				
// 			},1000);
// 	},5000);
	


// 	textBox.style.border= "none";
// 	textBox.style.borderTop = "1px solid rgb(210,210,210)"
// 	textBox.style.borderLeft = "1px solid rgb(210,210,210)"
// 	textBox.style.borderBottom = "1px solid rgb(210,210,210)"

// })

		
// }
	
		textBox.style.border = "2px solid rgb(210,210,210)";
		textBox.style.borderRadius = "10px 0px 0px 10px"
		textBox.style.backgroundColor = "rgb(245,245,245)"

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


const numberContainer = document.querySelector('#picsBox');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
  
    if((scrolled >= 1200) || (scrolled <= 1400)){
        


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

		texts.style.opacity = "1";

		if(window.innerWidth > 1200){
			textBox.style.transform = " translate(0%, -30%)"
		} else{
			textBox.style.transform = " translate(0%, -0%)"
		}
		
		
	

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



		var picsUrlArr1 = ["('https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
		"('https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60')",
		"('https://plus.unsplash.com/premium_photo-1664361480215-0614092ca185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')", 
		"('https://images.unsplash.com/photo-1549201440-34391ce5ffd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')"];

var zip = 1;
setInterval(() => {
cd1.style.transition = "all 1s ease-in-out";
cd1.style.opacity= "0";

cd2.style.transition = "all 1s ease-in-out";
cd2.style.opacity= "0";

cd3.style.transition = "all 1s ease-in-out";
cd3.style.opacity= "0";

cd4.style.transition = "all 1s ease-in-out";
cd4.style.opacity= "0";

	let numPic1 = Math.floor(Math.random() * 4);
	let numPic2 = Math.floor(Math.random() * 4);
	let numPic3 = Math.floor(Math.random() * 4);
	let numPic4 = Math.floor(Math.random() * 4);

	setTimeout(()=>{
		

	
	console.log(`1: ${numPic1}`)
	console.log(`2: ${numPic2}`)
	console.log(`3: ${numPic3}`)
	console.log(`4: ${numPic4}`)

	console.log(`no === ${zip}`)
	zip++

	cd1.style.backgroundImage = `url${picsUrlArr1[numPic1]}`;

	cd2.style.backgroundImage = `url${picsUrlArr1[numPic2]}`;

	cd3.style.backgroundImage = `url${picsUrlArr1[numPic3]}`;

	cd4.style.backgroundImage = `url${picsUrlArr1[numPic4]}`;



	cd1.style.opacity= "1";
	cd2.style.opacity= "1";
	cd3.style.opacity= "1";
	cd4.style.opacity= "1";
	},1000)
},5000)


	

	textBox.style.border= "none";
	textBox.style.borderTop = "1px solid rgb(210,210,210)"
	textBox.style.borderLeft = "1px solid rgb(210,210,210)"
	textBox.style.borderBottom = "1px solid rgb(210,210,210)"



    } 
});

// var picsUrlArr1 = ["('https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
// "('https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60')",
// "('https://plus.unsplash.com/premium_photo-1664361480215-0614092ca185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')", 
// "('https://images.unsplash.com/photo-1549201440-34391ce5ffd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')"];

// var zip = 1;
// setInterval(() => {
// cd1.style.transition = "all 1s ease-in-out";
// cd1.style.opacity= "0";

// cd2.style.transition = "all 1s ease-in-out";
// cd2.style.opacity= "0";

// cd3.style.transition = "all 1s ease-in-out";
// cd3.style.opacity= "0";

// cd4.style.transition = "all 1s ease-in-out";
// cd4.style.opacity= "0";



// setTimeout(()=>{


// var numPic1 = Math.floor(Math.random() * 4);
// var numPic2 = Math.floor(Math.random() * 4);
// var numPic3 = Math.floor(Math.random() * 4);
// var numPic4 = Math.floor(Math.random() * 4);
// console.log(`1: ${numPic1}`)
// console.log(`2: ${numPic2}`)
// console.log(`3: ${numPic3}`)
// console.log(`4: ${numPic4}`)

// console.log(`no === ${zip}`)
// zip++

// cd1.style.backgroundImage = `url${picsUrlArr1[numPic1]}`;

// cd2.style.backgroundImage = `url${picsUrlArr1[numPic2]}`;

// cd3.style.backgroundImage = `url${picsUrlArr1[numPic3]}`;

// cd4.style.backgroundImage = `url${picsUrlArr1[numPic4]}`;



// cd1.style.opacity= "1";
// cd2.style.opacity= "1";
// cd3.style.opacity= "1";
// cd4.style.opacity= "1";
// },1000)
// },5000)
