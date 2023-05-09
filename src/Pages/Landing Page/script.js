
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



