
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: "smooth"
  });

}


window.onscroll = function() {
  var targetSection = document.getElementById("openingSectionScroll");
  var targetPosition = targetSection.offsetTop;
  var currentPosition = window.pageYOffset;
  var header = document.getElementById("header")
 
  if(currentPosition >= targetPosition){
    header.classList.add('pinkheader')
  }   
  else{
    header.classList.remove('pinkheader')
  }
 
}
