let closedpopup = document.getElementById("morescreenn");
let verfies = document.getElementById("moreitems");

verfies.addEventListener("click", function() {

 if (closedpopup.style.display === "none") {
   closedpopup.style.display = "block";
 } else {
   closedpopup.style.display = "none";
 }
});

let newpopup = document.getElementById("Draftconenets");
let newverfies = document.getElementById("Draft");
let newclose = document.getElementById("closing");

newverfies.addEventListener("click", function() {
  newpopup.style.display = "block";
});

newclose.addEventListener("click", function(){
  newpopup.style.display = "none";
});
