document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top functionality
  var backToTopButton = document.getElementById("backToTopBtn");

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Smooth hover effect for product boxes
  var productBoxes = document.querySelectorAll(".box");

  productBoxes.forEach(function (box) {
    box.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f0f0f0"; // Change to the desired background color
    });

    box.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "white"; // Reset to the original background color
    });
  });
});
