// Select the button and dropdown content elements
var dropBtn = document.getElementById("dropBtn");
var dropdownContent = document.getElementById("dropdownContent"); 
// Add event listener to the button
dropBtn.addEventListener("click", function() {
  // Toggle the display of the dropdown content
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";// Change the button icon back to the default "bars" icon

} else {
    dropdownContent.style.display = "none"; // Change the button icon to an "x"

}
});

//Click Hilang 
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  });
  
// Select the link element
var scrollLink = document.querySelectorAll('.scroll-to');

// Add a click event listener to the link
scrollLink.forEach(function(link){
    link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    // Select the target section
    var targetSection = document.querySelector(this.getAttribute('href'));
  
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
  })

// Download

function downloadPDF(){}