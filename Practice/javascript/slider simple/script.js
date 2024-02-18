let counter = 2; // Initialize counter to 0

// Call the controller function with an initial value to start the slideshow
controller(0);

function controller(x) {
    counter = counter + x;
    slideshow(counter);
}

function slideshow(num) {
    let slides = document.getElementsByClassName('slide');
    if (num >= slides.length) {
        counter = 0;
        num = 0;
    }
    if (num < 0) {
        counter = slides.length - 1;
        num = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // console.log(num);
    slides[num].style.display = "block";
}
