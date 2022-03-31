const display = document.getElementById('result')

const buttons = Array.from(document.querySelectorAll('button'))
console.log(buttons)

buttons.map(btn => {
   btn.addEventListener('click',evt => {
       switch(evt.target.innerText){

        case('C'):
            display.innerText = ''
            break;
        case('='):
            try{
                display.innerText = eval(display.innerText)
            }catch{
                display.innerText = 'Error!'
            }
            break
        default:
            display.innerText += evt.target.innerText
            break
       }
   })
   console.log(display.innerText)
})

