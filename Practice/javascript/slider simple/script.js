// let counter = 2; // Initialize counter to 0

// // Call the controller function with an initial value to start the slideshow
// controller(0);

// function controller(x) {
//     counter = counter + x;
//     slideshow(counter);
// }

// function slideshow(num) {
//     let slides = document.getElementsByClassName('slide');
//     if (num >= slides.length) {
//         counter = 0;
//         num = 0;
//     }
//     if (num < 0) {
//         counter = slides.length - 1;
//         num = slides.length - 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     // console.log(num);
//     slides[num].style.display = "block";
// }
const slider = document.querySelector("[data-slider]");
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");
const slides = Array.from(track.querySelectorAll(".slide"));

if (track) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  track.addEventListener("scroll", () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }

    // Loop through each slide to set active slide and adjust height
    slides.forEach((slide) => {
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 1;
      const trackCenter = track.getBoundingClientRect().left + track.offsetWidth / 1;

      if (Math.abs(slideCenter - trackCenter) < slideRect.width / 1) {
        slide.classList.add("active");
        track.style.height = `${slide.offsetHeight}px`;
      } else {
        slide.classList.remove("active");
      }
    });
  });
}

  // track.addEventListener("scroll", () => {
  //   const trackScrollWidth = track.scrollWidth;
  //   const trackOuterWidth = track.clientWidth;

  //   prev.removeAttribute("disabled");
  //   next.removeAttribute("disabled");

  //   if (track.scrollLeft <= 0) {
  //     prev.setAttribute("disabled", "");
  //   }

  //   if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
  //     next.setAttribute("disabled", "");
  //   }
  // });

