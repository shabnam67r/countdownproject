document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero-section");
  
    // Create a <picture> element for the background image
    const picture = document.createElement("picture");
    const img = document.createElement("img");
  
    // Set the image source and attributes
    img.src = "https://via.placeholder.com/1920x1080"; // Replace with your image URL
    img.alt = "Hero Background";
    picture.appendChild(img);
  
    // Append the picture element to the hero section
    heroSection.appendChild(picture);
  
    // Create an <h1> element for the text
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Website"; // Replace with your desired text
    heroSection.appendChild(heading);
  });
  