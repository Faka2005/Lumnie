function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
  let dropdowns = document.getElementsByClassName("dropdown");
  for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
          this.querySelector(".dropdown-content").classList.toggle("show");
      });
  }
});
