//CODICI JAVASCRIPT UTILIZZATI DA www.rolandoscaccabarozzi.it


window.onload = function() 
  { 
	document.getElementById("hideAll").style.opacity = '0'
	document.getElementById("hideAll").style.zIndex = '-100'; 

	}


//MOSTRA IL PULSATE TO TOP
			// When the user scrolls down 20px from the top of the document, show the button
			// Modificata per poter (poi) nascondere bottone quando sono nel footer
			function displayToTopBtn() {
				//if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
			    if (
			    	(document.body.scrollTop > 20 && 1) || 
			    	(document.documentElement.scrollTop > 20 && 1))
			    	{

			        document.getElementById("scrollToTopBtn").style.display = "block";
			    } else {
			        document.getElementById("scrollToTopBtn").style.display = "none";
			    }
			}

			// When the user clicks on the button, scroll to the top of the document
			function ScrollToTopFunction() {
			    	$('html,body').animate({
				    	 scrollTop: 0
					}, 1000);
			}

// MOSTRO TOP MENU SE LA PAGINA SCORRE VERSO L'ALTO

/*
      $('document').ready(
        function displayTopMenu() {
          var lastScrollTop = 0;
          $(window).scroll(function(event){
                t =  document.getElementById("testata");
               var st = $(this).scrollTop();

               if ($(window).scrollTop()> 50 && $(window).width() <= 660) {

               if (st > lastScrollTop){
                   console.log("down");
                    
                    //document.getElementById("testata").style.visibility = "hidden";
                      console.log("classi prima", t.classList);
                      t.className = "clearfix menu-va-su";
                      console.log("classi dopo", t.classList);
                      document.getElementById("testata").style.top = '-50px';
                    
               }
               else if(st == lastScrollTop)
               {
                 //do nothing 
                 //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
               }
               else {
                  console.log("up");
                  //document.getElementById("testata").style.visibility = "visible";
                  console.log("classi prima", t.classList);
                  t.className = "clearfix menu-vien-giu";
                  console.log("classi dopo", t.classList);
                  document.getElementById("testata").style.top = '0px';

               }

             }

               lastScrollTop = st;
            });
      });
  */
/*
elemento..className += " active";     aggiunge classe
elemento.className.replace(" active", "");        toglie

*/



//ANIMAZIONE SU CLICK PULSANTE MENU
	    	$(document).ready(function(){   
	    
			//When btn is clicked
			$(".icona-menu").click(function() {
				$(".main-menu").toggleClass("show");
				//$("body").toggleClass("stop-scrolling");
				//$('body').bind('touchmove', function(e){e.preventDefault()})
				$(".effetto-opaco").toggleClass("show");
			});  
			//submenu
			$(".parent-menu").click(function() {
				$(".child-menu").toggleClass("show");
				//$("body").toggleClass("stop-scrolling");
				//$('body').bind('touchmove', function(e){e.preventDefault()});
			}); 

	    });

// Close the dropdown menu if the user clicks outside of it
//window.ontouchstart = function(event) {
window.onclick = function(event) {
  if (!event.target.matches('.parent-menu')) {

  	console.log('sono fuori dal dropdown');

    var dropdowns = document.getElementsByClassName("child-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  };

  //applico anche al menu principale
  if ((!event.target.matches('.icona-menu')) && (!event.target.matches('.parent-menu'))){

  	console.log('sono fuori dal dropdown');

    var dropdowns = document.getElementsByClassName("main-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        $(".effetto-opaco").toggleClass("show");
      }
    }
  };
}


//EFFETTO SCROLL PAGE SU LINK ANCORE
	    	$(function() {
				$('a[href*=#]:not([href=#])').click(function() {
					//$(".effetto-opaco").toggleClass("show");  l'avevo messo io???
					//$(".main-menu").toggleClass("show");

				if (document.body.scrollTop > 200 && !(this.hash == '#anchor-inizio-contenuto')) { //se sono sceso nella pagina, agisco solo su 2) quelli del menu fisso
					$(".main-menu-2").toggleClass("show");
					$(".effetto-opaco").toggleClass("show");
				} else {
					$(".main-menu").toggleClass("show");
					$(".effetto-opaco").toggleClass("show");
				}

				if (this.hash == '#anchor-inizio-contenuto'){
					$(".main-menu").toggleClass("show");
					$(".effetto-opaco").toggleClass("show");
				}
				if (location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") && 
					location.hostname == this.hostname) {
					var target = $(this.hash);
					var x = 0;
					if (this.hash == '#anchor-inizio-contenuto'){
						x = 70;
					}
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
						scrollTop: target.offset().top-x
							}, 1000);
						return false;
					}
				}
				});
				});	    	

//EFFETTO APPARIZIONE CONTENUTO MENTRE STAI SCORRENDO LA PAGINA

	    	function effettoDelay(elem) {
	    		//console.log('effettoDelay');
	    		var docViewTop = $(window).scrollTop();
			    var docViewBottom = docViewTop + $(window).height();
			    var elemTop = $(elem).offset().top;
			    var elemBottom = elemTop + $(elem).height();
			    return(docViewBottom >= elemTop + 50);
			};	    	



//CAROUSEL

var slideIndex = 1;
try {
	showSlides(slideIndex);} 
catch(e) {
	console.log('Salto showSlides')}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myCarousel");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
};


//CAROUSEL 2 (PIU STRETTO)

var slideIndex = 1;
try{
	showSlides2(slideIndex);}
catch(e){
	console.log('Salto showSlides2')
}

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("myCarousel2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active2";
}

//CAROUSEL 3 (CLONE PIU STRETTO)

var slideIndex = 1;
try{
	showSlides3(slideIndex);}
catch(e){
	console.log('Salto showSlides3')
}

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("myCarousel3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


//OTHER SLIDESHOW

var slideIndex = 1;
try{
	showDivs(slideIndex);}
catch(e){
	console.log('Salto showDivs')
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


//OTHER SLIDESHOW 2

var slideIndex = 1;
try{
	showDivs2(slideIndex);}
catch(e){
	console.log('Salto showDivs2')
}

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
