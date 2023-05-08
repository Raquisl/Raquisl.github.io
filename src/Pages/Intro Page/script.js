function saveAndRedirect(name){

    localStorage.setItem('name', name)

    window.location.href = `${window.location.origin}/src/Pages/Landing%20Page/index.html`;

}

var input = document.getElementById("nameField");
input.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        event.preventDefault();
        document.getElementById("submitButton").click();
    }
});