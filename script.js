
    let closedpopup= document.getElementById("popup")
    let verfies = document.getElementById("verify")
    verfies.addEventListener("click",function open(){
    //    alert("click")
        if (closedpopup.style.display==="none"){

            closedpopup.style.display="block"
        }else{
            closedpopup.style.display="none"
        }
    })
    open()

    // verfies.addEventListener("click",function closed(){
    //     alert("click")
    //      if (closedpopup.style.display="block"){
 
    //         closedpopup.style.display="none"
    //      }
    //  })
    //  closed()
