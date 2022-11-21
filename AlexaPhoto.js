const cd1 = document.getElementById("card1");
const cd2 = document.getElementById("card2");
const cd3 = document.getElementById("card3");
const cd4 = document.getElementById("card4");

// const textBox= document.querySelector('#textBox')

// var zIn = 12;
// 	var allCards = document.querySelectorAll("div.card");
	

	


// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// 				// Section Optimizations //








// 				// Section Optimizations //
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////







	
// var card= {
// 	card1: "photo1",
// 	card2: ""
// }


// if(window.innerWidth > 1200){
// 	textBox.style.height= "60vh"

// 	cd1.style.width = "12vw";
// 	cd1.style.height = "15vw";

// 	cd2.style.width = "12vw";
// 	cd2.style.height = "15vw";

// 	cd3.style.width = "12vw";
// 	cd3.style.height = "15vw";

// 	cd4.style.width = "12vw";
// 	cd4.style.height = "15vw";
// } else {
// 	textBox.style.height= "25vh"
// 	textBox.style.transform = "translate(100%, 20%)";


// 	document.querySelector('#cardsBox1').style.height = '40vw';

// 	cd1.style.width = "21vw";
// 	cd1.style.height = "28vw";

// 	cd2.style.width = "21vw";
// 	cd2.style.height = "28vw";

// 	cd3.style.width = "21vw";
// 	cd3.style.height = "28vw";

// 	cd4.style.width = "21vw";
// 	cd4.style.height = "28vw";
// }



// // percentage height for pictures should fit 
// // 70% of screen height if in landscape


// const numberContainer = document.querySelector('#picsBox');
// const moving = document.querySelector(".movingText");
// moving.style.color = "blue";
// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;

//   moving.style.transform = ""`translate(0%, ${scrolled}%)`;

//     if(scrolled >= 1200){
        
// 		cd1.style.transition = "all 1.2s ease-in-out"
// 		cd2.style.transition = "all .8s ease-in-out"
// 		cd3.style.transition = "all 1.5s ease-in-out"
// 		cd4.style.transition = "all 1s ease-in-out"

// 		cd1.style.opacity = "1";
// 		cd2.style.opacity = "1";
// 		cd3.style.opacity = "1"; 
// 		cd4.style.opacity = "1";

// 		if(window.innerWidth > 1200){
		
// 		cd1.style.transform = "translate(80%, 60%) ";
// 		cd2.style.transform = "translate(200%, 60%) ";
		
// 		cd3.style.transform = "translate(80%, -60%) ";
// 		cd4.style.transform = "translate(200%, -60%) ";	

// 		} else {		
	
// 		cd1.style.transform = "translate(10%, 60%) ";
// 		cd2.style.transform = "translate(130%, 60%) ";

// 		cd3.style.transform = "translate(10%, -60%) ";
// 		cd4.style.transform = "translate(130%, -60%) ";	
// 		}

		
		
		
	

// 		cd1.addEventListener("mouseover", () =>{
// 			cd1.style.transform = "translate(80%, 60%) scale(1.4) ";
// 		})
// 		cd2.addEventListener("mouseover", () =>{
// 			cd2.style.transform = "translate(200%, 60%) scale(1.4) ";
// 		})
// 		cd3.addEventListener("mouseover", () =>{
// 			cd3.style.transform = "translate(80%, -60%) scale(1.4) ";
// 		})
// 		cd4.addEventListener("mouseover", () =>{
// 			cd4.style.transform = "translate(200%, -60%) scale(1.4) ";
// 		})
// 		cd1.addEventListener("mouseout", () =>{ 
// 			cd1.style.transform = "translate(80%, 60%)";
// 		})
// 		cd2.addEventListener("mouseout", () =>{ 
// 			cd2.style.transform = "translate(200%, 60%)";
// 		})
// 		cd3.addEventListener("mouseout", () =>{ 
// 			cd3.style.transform = "translate(80%, -60%)";
// 		})
// 		cd4.addEventListener("mouseout", () =>{ 
// 			cd4.style.transform = "translate(200%, -60%)";
// 		})


// setTimeout(()=> {
// 	texts.style.opacity = "1";

// 	if(window.innerWidth > 1200){
// 		textBox.style.transform = " translate(0%, -30%)"
// 	} else{
// 		textBox.style.transform = " translate(0%, -0%)"
// 	}


// 	textBox.style.backgroundColor = "rgb(245,245,245)"
// 	textBox.style.transition = "all 1s ease-in-out"
// 	textBox.style.opacity = "1";
// 	textBox.style.border= "none";
	
// },300)	
	
//     } 
// }

// );




// var picsUrlArr1 = ["('https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
// 		"('https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60')",
// 		"('https://images.unsplash.com/photo-1659598086265-4728c6fbce19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')", 
// 		"('https://images.unsplash.com/photo-1549201440-34391ce5ffd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
// 	"('https://images.unsplash.com/photo-1667631798116-a7805e36fee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"];
		
// var numArr1 = [3,4,0,1,2];

// var randomNum = () => {
// 	return Math.floor(Math.random() * 4);
// };
// setInterval(() => {

// 	setTimeout(() => {
// 			//pic 1 initial transition
// 			cd1.style.transition = "all 0.5s ease-in-out";
			
// 			setTimeout(() => {
// 				//pic 1 second transition
// 				cd1.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
// 				numArr1.push(numArr1[0])
// 				numArr1.shift()
// 					setTimeout(()=> {
// 						//pic 2 initial transition
// 						cd2.style.transition = "all 0.5s ease-in-out";
						
// 							setTimeout(()=> {
// 								//pic 2 second transition
// 								cd2.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
// 								numArr1.push(numArr1[0])
// 								numArr1.shift()
// 									setTimeout(()=> {
// 										//pic 3 initial transition
// 										cd3.style.transition = "all 0.5s ease-in-out";
										
// 											setTimeout(()=> {
// 												//pic 3 second transition
// 												cd3.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
// 												numArr1.push(numArr1[0])
// 												numArr1.shift()
// 													setTimeout(()=> {
// 														//pic 4 initial transition
// 														cd4.style.transition = "all 0.5s ease-in-out";
														
// 															setTimeout(()=> {
// 																//pic 4 second transition
// 																cd4.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
// 																numArr1.push(numArr1[0])
// 																numArr1.shift()
// 															},500)
// 													},500)
// 											},500)
// 									},500)
// 							},500)
// 					},500)
// 			},500)
// 	},1000)

// },4000)



// const getStart = document.querySelector("#getStarted")
// const lowerSec = document.querySelector(".lowerSection");
// const promBox = document.querySelector(".promotionBox");

// getStart.addEventListener("click", ()=> {
// 	lowerSec.scrollIntoView();
// })

// if(window.innerWidth > 1200) {
// 	lowerSec.style.height = "200vh";
// } else {
// 	lowerSec.style.height = "100vh";
// 	promBox.style.margin = "20vh auto 0px auto";
// 	promBox.style.height = "15vh";
// }


const contentBox = document.querySelector(".contentBox")
const cards = document.querySelectorAll(".card")
const texts = document.querySelector(".texts");
const lowerSection = document.querySelector(".lowerSection");
const navBox = document.querySelector("#navigationBox");
const navButtons = document.querySelectorAll("buttons")
const hr1 = document.querySelector(".hr1");
const text3 = document.querySelector(".text3");
const getStart = document.querySelector("#getStarted")
const aboutUs = document.querySelector(".aboutUs");
const footRight = document.querySelectorAll(".footRight > h2")
const footLeft = document.querySelectorAll(".footLeft > img")

const allVisitBox = document.querySelectorAll("#visitBox")
const visitBox2 = document.querySelector(".visitBox2");
const picBox = document.querySelector(".visitBox1 > .picBox")
const textBox = document.querySelector(".visitBox1 > .textBox")
const picBox2 = document.querySelector(".visitBox2 > .picBox")
const textBox2 = document.querySelector(".visitBox2 > .textBox")
const footer = document.querySelector(".footerBox");
const contactUs = document.querySelector(".contactUs");

if(window.innerWidth > 1200){
lowerSection.style.height = "450vh";
footer.style.height = "55vh";


} else {
lowerSection.style.height = "320vh";
contentBox.style.marginTop = "70px";
contentBox.style.height = "22vh";
picBox.style.width = "100%";
picBox.style.height = "50%";
textBox.style.width = "100%";
textBox.style.height = "50%";
picBox2.style.width = "100%";
picBox2.style.height = "50%";
textBox2.style.width = "100%";
textBox2.style.height = "50%";

text3.style.padding = "12px 50px 12px 50px";
aboutUs.style.fontSize = "1em";
aboutUs.style.width = "60%";
aboutUs.style.height = "30px";
aboutUs.style.letterSpacing = "4px";
aboutUs.style.padding = "15px 0px 5px 0px"
aboutUs.style.margin = "50px auto 10px auto";

contactUs.style.fontSize = "0.8em";
contactUs.style.padding = "10px 20px 20px 20px"; 


	allVisitBox.forEach((visitB) => {
		visitB.style.width = "80vw";
		visitB.style.height = "60vh";
		visitB.style.display = "flex";
		visitB.style.flexDirection = "column";
		visitB.style.margin = "30px auto";
	});
	footRight.forEach((footR) => {
		footR.style.marginTop = "10px";
	});
	footLeft.forEach((footL) => {
		footL.style.marginTop = "0px";
	});
hr1.style.margin = "50px auto 50px auto";
visitBox2.style.flexDirection = "column-reverse";
}



cards.forEach((card) => {
 card.style.opacity = "0";
 card.style.transform = "translate(0%, 60%)"
 card.style.transition = "all 1.5s ease-in-out"
});

texts.style.opacity = "0";
texts.style.transform = "translate(0%, 60%)"
texts.style.transition = "all 1.5s ease-in-out"

const bgMove = document.querySelector(".container_image");

window.addEventListener('scroll', () => {
	 const scrolled = window.scrollY;
	
	 var counterY = scrolled/20;

	bgMove.style.backgroundPosition = `50% ${50+counterY}%`



	if(scrolled >= 1100){
		hr1.style.opacity = "1";
		texts.style.opacity = "1";
		texts.style.transform = "translate(0%, 0%)";


	cards.forEach((card) => {	
		card.style.transform = "translate(0%, 0%)"
		card.style.opacity = "1";
	});

	navButtons.forEach((buttons) => {
		buttons.style.transition = "all 1s ease-in-out"
		buttons.style.transform = "translate(0%, -20%)";
		buttons.style.opacity = "0";
	});
	
	
		
		
	} else {
		hr1.style.opacity = "0";
		texts.style.opacity = "0";
		texts.style.transform = "translate(0%, 60%)"
		texts.style.transition = "all 1.5s ease-in-out"
		

		cards.forEach((card) => {
			card.style.transform = "translate(0%,60%)"
			card.style.opacity = "0";
			card.style.transition = "all 1.5s ease-in-out"
			
		   });
	}

	if(scrolled > 1500){

		textBox.style.transform = "translate(0%, 0%)";
		textBox.style.opacity = "1";
		picBox.style.transform = "translate(0%, 0%)";
		picBox.style.opacity = "1";
		
	} else {

		textBox.style.transform = "translate(40%, 0%)";
		textBox.style.opacity = "0";
		picBox.style.transform = "translate(40%, 0%)";
		picBox.style.opacity = "0";
		
	}

	if(scrolled > 1900){
		visitBox2.style.transform = "translate(0%, 0%)";
		visitBox2.style.opacity = "1";
	} else {
		visitBox2.style.transform = "translate(-40%, 0%)";
		visitBox2.style.opacity = "0";
	}

});

	


	
var picsUrlArr1 = ["('https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
		"('https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60')",
		"('https://images.unsplash.com/photo-1659598086265-4728c6fbce19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')", 
		"('https://images.unsplash.com/photo-1549201440-34391ce5ffd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGh1bWFufGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60')",
	"('https://images.unsplash.com/photo-1667631798116-a7805e36fee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"];
		
var numArr1 = [3,4,0,1,2];

var randomNum = () => {
	return Math.floor(Math.random() * 4);
};
setInterval(() => {

	setTimeout(() => {
			//pic 1 initial transition
			cd1.style.transition = "all 0.5s ease-in-out";
			
			setTimeout(() => {
				//pic 1 second transition
				cd1.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
				numArr1.push(numArr1[0])
				numArr1.shift()
					setTimeout(()=> {
						//pic 2 initial transition
						cd2.style.transition = "all 0.5s ease-in-out";
						
							setTimeout(()=> {
								//pic 2 second transition
								cd2.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
								numArr1.push(numArr1[0])
								numArr1.shift()
									setTimeout(()=> {
										//pic 3 initial transition
										cd3.style.transition = "all 0.5s ease-in-out";
										
											setTimeout(()=> {
												//pic 3 second transition
												cd3.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
												numArr1.push(numArr1[0])
												numArr1.shift()
													setTimeout(()=> {
														//pic 4 initial transition
														cd4.style.transition = "all 0.5s ease-in-out";
														
															setTimeout(()=> {
																//pic 4 second transition
																cd4.style.backgroundImage = `url${picsUrlArr1[numArr1[0]]}`;
																numArr1.push(numArr1[0])
																numArr1.shift()
															},500)
													},500)
											},500)
									},500)
							},500)
					},500)
			},500)
	},1000)

},4000)

getStart.addEventListener("click", ()=> {
	lowerSection.scrollIntoView();
})

const book = {
	cover: `binded`,
	color: `white`
}



	
