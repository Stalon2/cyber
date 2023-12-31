//navigation js 
let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');
// carousel javascript
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns= document.querySelectorAll(".wrapper i");
const firstCardWidth= carousel.querySelector(".cadre").offsetWidth;
const carouselChildrens=[...carousel.children];

// loader

setTimeout(function(){
  $('.loader-bg').fadeToggle();
},2500);






let isDragging = false , startX , startScrollLeft, timeoutId;

let cardPreView = Math.round(carousel.offsetWidth / firstCardWidth);




carouselChildrens.slice(-cardPreView ).reverse().forEach(card =>{
  carousel.insertAdjacentHTML("afterbegin" , card.outerHTML);
});

carouselChildrens.slice(0, cardPreView ).forEach(card =>{
  carousel.insertAdjacentHTML("beforeend" , card.outerHTML);
});

//ajouter des auditeurs d'événements du bouton fléché pour faire défiler le carrousel à gauche et à droite
arrowBtns.forEach(btn =>{
  btn.addEventListener("click" , () =>{
    carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    
  });

});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  //enregistre le curseur initial et la position de défilement du carrousel
  startX= e.pageX;
  startScrollLeft= carousel.scrollLeft;

}

const dragging = (e) => {
  if(!isDragging) return;//si le glissement est un faux retour d'ici
  //met à jour la position de défilement du carrousel en fonction du mouvement du curseur
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");

}

const autoPlay = () => {
  if (window.innerWidth < 800) return; // retour si la fenêtre est inférieure à 800
  timeoutId = setTimeout( () => carousel.scrollLeft += firstCardWidth, 2500);//lecture automatique du carrousel toutes les 2500 ms
}
autoPlay();

const infiniteScroll= () => {
  //si le carrousel est au début, faites défiler jusqu'à la fin
  if(carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    //si le carrousel est a la fin, faites défiler jusqu'au debut
  } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
    carousel.classList.remove("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;

  }

  clearTimeout(timeoutId);
  // effacer le temps mort existant et démarrer la lecture automatique si la souris ne survole pas le carrousel de survol
  if(!wrapper.matches(":hover")) autoPlay();  

}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup" , dragStop);
carousel.addEventListener("scroll" , infiniteScroll);
wrapper.addEventListener("mouseenter" , () =>  clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave" , autoPlay);







//reveal animation  js 
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navigation.classList.toggle('open');
}

const sr = ScrollReveal({
  duration:1500, 
  origin:'left',
  distance:'50px',
  delay:200,
  scale:0.5,
  reset:false,
  
});

sr.reveal('.navigation', {
  delay:100,
  origin:'bottom',
});

sr.reveal('.about', {
  delay:'500',
  origin:'right',
});


sr.reveal('.title', {
  scale:2.5,
  origin:'top',
});
sr.reveal('.wrapper', {
  
  origin:'left',
});

sr.reveal('.hero-text', {
  delay:'500',
  origin:'right',
});



sr.reveal('.hero-img', {
  delay:450,
  origin:'bottom',

});

sr.reveal('.icons', {
  delay:'500',
  origin:'left',
});

sr.reveal('.scroll-down', {
  delay:'500',
  origin:'right',
});

sr.reveal('.card', {
  delay:'500',
  origin:'top',
  scale:1.5,
});


sr.reveal('.text-pr', {
  delay:'500',
  origin:'right',
});
// window.addEventListener('scroll', reveal);


// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for(var i=0; i<reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if(revealtop<windowheight-revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }

// Sélectionner l'élément du bouton
const btnPlay = document.querySelector('.btn-play');

    // Ajouter un événement de clic au bouton de lecture
  btnPlay.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    
    const videoUrl = btnPlay.getAttribute('href');

        // Ouvrir la vidéo dans une fenêtre contextuelle
    const width = 800; // Ajustez la largeur selon vos besoins
    const height = 600; // Ajustez la hauteur selon vos besoins
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    window.open(videoUrl, 'video_popup', `width=${width},height=${height},left=${left},top=${top}`);
  }
);





        



function sendMail(){
  var params= {
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value,
      
  };        
  const serviceID ="service_k6en6pc";
  const templateID ="stemplate_vxmbh4b";


  emailjs
  .send(serviceID,templateID,params)
  .then( res => {
    document.getElementById("name").value="",
    document.getElementById("email").value="",
    document.getElementById("message").value="",
    console.log(res);
    alert("your message  sent succes")
  })
  .catch(err=>console.log(err));
    
}
              























