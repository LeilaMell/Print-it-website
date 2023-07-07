const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let bannerImg = document.querySelector('.banner-img');
//bannerImg.src = imagesSrc[0];
let bannerTitle = document.querySelector('.tagline');

//tableau des src pour bannerImg
const imagesSrc = []; 
for (let i of slides) {
	let img = i.image;
	imagesSrc.push(img);
}

const tagline =[];
for (let t of slides){
	let tag = t.tagLine;
	tagline.push(tag);
}

slides.forEach(slide =>{
	/* générer les points */
	let dot = document.createElement("div");
	dot.className = 'dot';
	document.querySelector(".dots").appendChild(dot);
	
	/* vérifier si on est au premier tour de la boucle, ajouter la classe dot_selected */
	if (slide= slides[0]){
		let firstDot = document.querySelector(".dots").firstElementChild;
		firstDot.classList.add('dot_selected');
	}
})

let myIndex=0;
function changeSlide (){
	const element=imagesSrc[myIndex];
	const legende=tagline[myIndex];
	document.querySelector(".banner-img").src=element;
	document.querySelector(".tagline").innerHTML=legende;
}

const fleches = document.querySelectorAll(".arrow");
fleches.forEach(fleche => {
	fleche.addEventListener("click", () =>{

		if (fleche.classList.contains('arrow_left')) {
			console.log(myIndex);
			console.log('clic gauche !');

			if(myIndex==0){
				let dotSelected= document.querySelector('.dot_selected');
				dotSelected.classList.toggle('dot_selected');
				let lastDot = document.querySelector(".dots").lastElementChild;
				lastDot.classList.add('dot_selected');
				myIndex=slides.length-1;
				const element=imagesSrc[myIndex];
				const legende=tagline[myIndex];
				document.querySelector(".banner-img").src=element;
				document.querySelector(".tagline").innerHTML=legende;
			}
			else{
				let dotSelected= document.querySelector('.dot_selected');
				dotSelected.previousElementSibling.classList.toggle('dot_selected');
				dotSelected.classList.toggle('dot_selected');
				myIndex--;
				const element=imagesSrc[myIndex];
				const legende=tagline[myIndex];
				document.querySelector(".banner-img").src=element;
				document.querySelector(".tagline").innerHTML=legende;
			}
			
		}
		if (fleche.classList.contains('arrow_right')) {
			console.log('clic droit !');
			console.log(myIndex);
			
			
			if(myIndex==(slides.length-1)){
				let dotSelected= document.querySelector('.dot_selected');
				dotSelected.classList.toggle('dot_selected');
				let firstDot = document.querySelector(".dots").firstElementChild;
				firstDot.classList.add('dot_selected');
				myIndex=0;
				const element=imagesSrc[myIndex];
				const legende=tagline[myIndex];
				document.querySelector(".banner-img").src=element;
				document.querySelector(".tagline").innerHTML=legende;
			}
			else{
				let dotSelected= document.querySelector('.dot_selected');
				dotSelected.nextElementSibling.classList.toggle('dot_selected');
				dotSelected.classList.toggle('dot_selected');	
				myIndex++;
				const element=imagesSrc[myIndex];
				const legende=tagline[myIndex];
				document.querySelector(".banner-img").src=element;
				document.querySelector(".tagline").innerHTML=legende;
			}
		}
	} )
}) 





