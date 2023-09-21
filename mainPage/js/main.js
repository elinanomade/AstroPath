"use strict";

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // User is scrolling up, show the header
    document.querySelector("header").style.top = "0";
  } else {
    // User is scrolling down, hide the header
    document.querySelector("header").style.top = "-100px"; // Adjust this value as needed
  }

  prevScrollPos = currentScrollPos;
};

// This code creates a smooth hide/show effect for a header element when the user scrolls the page.
// It's a common technique used to provide more screen space for content as the user scrolls
// down and reveal navigation when they scroll up.
