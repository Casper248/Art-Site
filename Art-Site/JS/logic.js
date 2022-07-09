//Variables
var actualIndex = 0; //Show Picutre #1 on Start Page Slider
const kebapDot = document.getElementsByClassName("kebap-dot"); // Kebap-Dots on Slider 
const slides = document.getElementsByClassName("slide"); // Array of the Slider Images 
var emailsender = document.getElementById('input-email');
var emailbody = document.getElementById('input-discription');
console.log(kebapDot);
if(kebapDot.length>0){
    kebapDot[0].classList.add("active-dot"); //Add first element of the array another class
}

if(slides.length>0){
    slides[0].classList.add("active-picture");
}


/* Function to switch the pictures in the slider using the arrows inside the slider*/
function switchSlide(count){ //count is given in arrow "-1" or "1"
    var newIndex = actualIndex + count;

    if(newIndex < 0){   //ensures that the slider cant go out of the picture index 
        newIndex = slides.length -1;
    }
    else if(newIndex > slides.length -1){
        newIndex = 0;
    }

    goToPicture(newIndex); 
};

/*Function to show the next or previous picture*/
function goToPicture(newIndex){
    kebapDot[actualIndex].classList.remove("active-dot"); 
    slides[actualIndex].classList.remove("active-picture");

    actualIndex = newIndex;

    kebapDot[actualIndex].classList.add("active-dot");
    slides[actualIndex].classList.add("active-picture");
};



function isEmailAdressValid(emailadress){
    var emailpattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailadress.match(emailpattern)){
        return true;
    }
    else {
        return false;
    }
}



