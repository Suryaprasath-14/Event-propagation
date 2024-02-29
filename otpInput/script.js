let inputfields = document.querySelector('.inputs')

inputfields.addEventListener('input', event =>{
    if(isNaN(event.target.value)==true)
    {
        event.target.value="";
        return
    }

    
    if(event.target.value !="")
    {
        if(event.target.nextElementSibling)
        {
            event.target.nextElementSibling.focus();
        }
          
    }
})


inputfields.addEventListener('keyup', event =>{
    if(event.key == 'Backspace' || event.key == 'Delete')
    {
        event.target.value="";
    
    if(event.target.previousElementSibling)
    {
        event.target.previousElementSibling.focus();

    }
        return;
    }
})


// let input=document.querySelector('.inputs')
// input.addEventListener("input",function(e){
// if (isNaN(e.target.value)==true){// this condition prevent input from alphabet
// e.target.value='' //if input value is alphabet then value will set to empty
// return
// }
// let target=e.target.nextElementSibling
// if (target){
// target.focus();
// }
// }
// )
// input.addEventListener('keyup',function(e){
// if (e.key=='Backspace' || e.key=="Delete")
// {
// e.target.value=''
// let target1=e.target.previousElementSibling
// if (target1);
// {
// target1.focus();
// }
// return;
// }
// })