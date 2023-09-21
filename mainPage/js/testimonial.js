"use strict";

const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.opacity = 1;
    } else {
      testimonial.style.opacity = 0;
    }
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

nextButton.addEventListener("click", nextTestimonial);
prevButton.addEventListener("click", prevTestimonial);

// Initially, show the first testimonial
showTestimonial(currentIndex);

// This code provides a simple testimonial slider that allows users to cycle through testimonials
// using the provided buttons. It does this by adjusting the opacity of testimonial elements to show or hide them.
