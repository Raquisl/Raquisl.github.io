
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({
          behavior: "smooth"
        });

      }

      function resetName() {
        localStorage.setItem("name", null)
        window.location.href = `${window.location.origin}/src/Pages/Intro%20Page/index.html`;
      }

      var name = localStorage.getItem("name")
      window.onload = function () {
        var tag = document.getElementById("nameField")
        tag.innerHTML = `Welcome, ${name}`
      }

      if (localStorage.getItem("name") === 'null') {
        window.location.href = `${window.location.origin}/src/Pages/Intro%20Page/index.html`;
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



