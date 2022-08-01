// scrollspy smooth
$(document).ready(function(){
  $('body').scrollspy({
    target: ".navbar", offset: 50
  })
  $("#myNavbar a").on('click', function(event){
    if(this.hash !== ""){
      event.preventDefault();

      var hash = this.hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      })
    }
  })
})


// preloader
var overlay = document.getElementById("overlay");
window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

//shrink navbar
window.onscroll = function(){scrollFunction()}
function scrollFunction(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("navbar").style.padding = "30px 10px"
    document.getElementById("logo").style.fontSize = "25px"
  } else {
    document.getElementById("navbar").style.padding = "80px 10px"
    document.getElementById("logo").style.fontSize = "35px"
  }
}

// scroll triger
function scrollTriger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el =>{
    addObsever(el, options)
  })
}

function addObsever(el, options){
  if(!('IntersectionObserver' in window)){
    if(options.cb){
      options.cb(el)
    } else {
      entry.target.classList.add('active')
    }
    return
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(options.cb){
        options.cb(el)
      } else {
        entry.target.classList.add('active')
      } 
      observer.unobserve(entry.target)
    })
  },options)
  observer.observe(el)
}

