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

const scriptURL = 'https://script.google.com/macros/s/AKfycbykuYNpe5muhYML9Kt-i43JfCitDAYEf9oWL_9FHXVdVzHwhpWvnUkmOlj2OmybhD8V/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})