var musicDataArr = JSON.parse(localStorage.getItem("music"))
// console.log(musicDataArr)


musicDataArr.map(function (elem) {
    
    var div = document.createElement("div");
    div.classList.add("right-contain");

    var imagediv = document.createElement("div");
    imagediv.classList.add("right-contain-img")

    var img = document.createElement("img")
    img.src = elem.img_url;

    imagediv.append(img)

    var textdiv = document.createElement("div")
    textdiv.classList.add("right-contain-text");

    var h3 = document.createElement("h3");
    h3.innerText = elem.text;

    textdiv.append(h3)

    div.append(imagediv, textdiv)
    
    document.querySelector(".right").append(div)

})