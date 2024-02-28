let starCont = document.querySelector('.star-container')
let ratingCount = document.querySelector('#star-rating')

let stars = document.querySelectorAll('.star')

let filled = 0;
starCont.addEventListener('click', (event) => {
    let currentClickedStart = event.target.dataset.index

    for(let i = 0; i < stars.length; i++) {
        if(i< currentClickedStart)
        {
            stars[i].classList.add('star-colored')
        }
        else{
        stars[i].classList.remove('star-colored')
        }
    }

    // for(let i = 0; i < currentClickedStart; i++) {
    //     stars[i].classList.add('star-colored')
    // }

    ratingCount.innerText = currentClickedStart
    filled = currentClickedStart
})

starCont.addEventListener("mouseover", function (e) {
    let currHovered = e.target.dataset.index;
    
    for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-colored");
    }
    
    for (let i = 0; i < currHovered; i++) {
    stars[i].classList.add("star-colored");
    }
    });
    
    starCont.addEventListener("mouseleave", function (e) {
    for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-colored");
    }
    
    for (let i = 0; i < filled; i++) {
    stars[i].classList.add("star-colored");
    }
    });
    