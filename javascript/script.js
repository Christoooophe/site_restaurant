
  
  // test e-mail si valide ou non

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.username.value))
  {
    
    return (true);
  }
    document.getElementById("span").innerHTML = "Mail non conforme";
    return (false);
}

let comptes = [{username : "Garry.bottom@gmail.com" , password : "Garry1"  }, {username : "BOB.bottom@gmail.com" , password : "BOB1"  }, {username :"Patrick.bottom@gmail.com", password : "PATRICK1"  }, {username : "CARLOS.bottom@gmail.com" , password : "CARLOS1"  }, {username : "Krabs.bottom@gmail.com" , password : "Money8" }]


function verifCompte(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    for (i = 0; i < comptes.length; i++){
        if (username == comptes[i].username && password == comptes[i].password){
            document.getElementById("span").innerHTML = "Connexion";
            document.getElementById("span").style.color = "white";
        break;
        }
        else {
            document.getElementById("span").innerHTML = "Mot de passe ou e-mail incorrect";
            document.getElementById("span").style.color = "red";
        }
    } 
}
    // fonction pour reset

function macouille(){
    document.getElementById("span").innerHTML = "";
}

    // Pour la case "voir le mdp"

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



/* Carousel  */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

const images = ["https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8294606.jpg&fm=jpg", "https://images.pexels.com/photos/8294620/pexels-photo-8294620.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8294620.jpg&fm=jpg", "https://images.pexels.com/photos/8294660/pexels-photo-8294660.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8294660.jpg&fm=jpg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
   startCarousel();
 }, 3000);
var index = 1;

startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index++]})`;
  carousel.classList.remove("fade");
  void carousel.offsetWidth;
  carousel.classList.add("fade");
  if(index > images.length - 1) index = 0;
}
    