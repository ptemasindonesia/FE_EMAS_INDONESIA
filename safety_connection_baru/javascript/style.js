//preloader
$(document).ready(function(){
  $(".container").fadeOut();
})

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//card slider
$('.card_slider_section3').card_slider_section3({
  loop: false,
  stagePadding : 15,
  margin: 10,
  nav : true,
  navText : [
    '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'
  ],
  responsive:{
    0:
    {
      items:1
    },640:
    {
      items:2
    },960:
    {
      items:3
    }
  }
})

//navbar change color
const items = document.querySelectorAll(".topnav");

//topnav responsive
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}