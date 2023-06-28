let openpopup = document.getElementById ("morescreen");
let verfies = document.getElementById("moreitems");

verfies.addEventListener("click", function open() {
  if (openpopup.style.display === "none") {
    openpopup.style.display = "block";
    // alert("Popup opened");
  } else {
    openpopup.style.display = "none";
    // alert("Popup closed");
  }
});
open()