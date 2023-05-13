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
