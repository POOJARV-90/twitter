let openpopup = document.getElementById("popup");
let verfies = document.getElementById("verify");

verfies.addEventListener("click", function() {
  if (openpopup.style.display === "none") {
    openpopup.style.display = "block";
    // alert("Popup opened");
  } else {
    openpopup.style.display = "none";
    // alert("Popup closed");
  }
});