var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".arrow").classList.toggle("rotate");
    var panel1 = this.nextElementSibling;
    if (panel1.style.display === "block") {
      panel1.style.display = "none";
    } else {
      panel1.style.display = "block";
    }
  });
}

// ----------------------accordation----------------


 document.querySelector("#menu11").addEventListener("click",function(){
   var a = document.querySelector("#menu1");
   
    if(a.style.display=="none"){
        a.style.display="block";

    }
    else{
        a.style.display="none";

    }
})
