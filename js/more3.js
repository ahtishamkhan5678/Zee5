var bhojpuriArr = JSON.parse(localStorage.getItem('bhopuri')) || []; 
// console.log(bhopuri);


function displayWebseries(bhojpuriArr) {
    document.querySelector(".more_container").innerHTML = "";

    bhojpuriArr.map(function (item, index) {
        var card = document.createElement('div');
        card.classList.add('card');

        var img = document.createElement('img');
        img.src = item.img_url;

        var text = document.createElement('div');
        text.classList.add('text');

        var moviename = document.createElement('h3');
        moviename.innerHTML = item.moviename;
        
        var tex_bottom = document.createElement('div');
        tex_bottom.classList.add('text_bottom');
        tex_bottom.innerHTML = ` <a href="#"><i class="fa-solid fa-play"></i> Watch</a> 
        <p><i class="fa-solid fa-share-nodes"></i> More</p>`;

        text.append(moviename,tex_bottom);

        card.append(img, text);
        document.querySelector(".more_container").append(card);



    });


        
}

displayWebseries(bhojpuriArr);

