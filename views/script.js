var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
document.addEventListener("DOMContentLoaded", function () {
    const hiddenWorkItem = document.querySelectorAll(".hidden-work");
    const seeMoreBtn = document.getElementById("seeMoreBtn"); 

    for (const item of hiddenWorkItem) {
        item.style.display = "none"; // Initially hide all hidden work items
      }
    
      seeMoreBtn.addEventListener("click", function () {
        for (const item of hiddenWorkItem) {
          item.style.display = "block"; // Show all hidden work items when the button is clicked
        }
        seeMoreBtn.style.display = "none"; // Hide the "See more" button after revealing the work items
      });
    });