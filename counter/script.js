let counter = document.querySelector('#counter')


let incrementBtn = document.querySelector('#increment')
let decrementBtn = document.querySelector('#decrement')
let resetBtn = document.querySelector('#reset')

let incrementBy = document.querySelector('#incrementBy')

incrementBtn.addEventListener('click', ()=>{
    let currentValue = parseInt(counter.innerText)
    let incrementVal = parseInt(incrementBy.value)

    let ans = currentValue + incrementVal
    counter.innerText= ans

})

decrementBtn.addEventListener('click',()=>{

    let currentValue = parseInt(counter.innerText)
    let incrementVal = parseInt(incrementBy.value)

    let ans = currentValue - incrementVal

    if(ans < 0)
    {
        ans = 0
    }
    counter.innerText= ans

})

resetBtn.addEventListener('click', () => {
    counter.innerText = 0
})