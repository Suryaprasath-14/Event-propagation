
let cont = document.querySelector('.container')


data.forEach(ticket =>{
    // for (let value in ticket){
    // console.log(`${ticket[value]}`)
    // }

     console.log(ticket.id);
    console.log(ticket.title);
    // console.log(ticket.price);
    // console.log(ticket.description);
     console.log(ticket.category);
    // console.log(ticket.image);
    console.log(ticket.rating.rate);
    console.log(parseInt(ticket.rating.rate));
     console.log(Math.round(ticket.rating.rate));
     console.log(ticket.rating.count);

     console.log("------------------------------------")

    createTickets(ticket.title, ticket.category,ticket.rating.count,ticket.rating.rate)

})


function createTickets(title, category, count, rate)
{

    let starRate = parseInt(rate);
    let ticketCard = document.createElement('div')
    let ratingDiv=""
    for(let i = 0; i<5; i++){
        // console.log(stars)
        // stars[i].classList.remove('star__notfilled')
        // stars[i].classList.add('star__filled')
        // stars[i].innerHTML = '&#9733;'

        if(i<starRate) {
            ratingDiv += '<span class="star__filled">&#9733;</span>'
        }else {
            ratingDiv += '<span class="star__notfilled">&#9734;</span>'
        }
     }

    ticketCard.classList.add('card');



     ticketDetails = document.createElement('div')

     ticketDetails.classList.add('details')

     ticketCard.innerHTML = ticketDetails

    ticketCard.innerHTML = `<div class="details">
    <span class="product__name">${title}</span>
    <br>
    <span class="product__category">${category}</span>

    <div class="all__star">
    ${ratingDiv}
    </div>
    <div class="rating__count">Rating Count : <span>${count}</span></div>
    </div>
    <div class="btn">
    <button class="btn__buy">Buy Now</button>
    </div>`




    

                 

                 cont.appendChild(ticketCard)

}