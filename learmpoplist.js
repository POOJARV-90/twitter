
      // JavaScript code to handle the click event
      document.getElementById("moreButton").addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default behavior of the link
          var moreScreen = document.getElementById("morescreen");
          moreScreen.style.display = (moreScreen.style.display === "none") ? "block" : "none";
      });
 
