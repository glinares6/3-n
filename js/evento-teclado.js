const input = document.getElementById('input')
// addEventListener('keyup', e => {
//     console.log(e);
//     console.log(e.ctrlKey);
//     console.log(e.altKey);

//     alert(e.key)
// })

// keydown -> al presionar el teclado
// keyup -> al soltar la tecla
// addEventListener('keydown', e => {
//     if (e.key === 'a' && e.ctrlKey === true) {
//         e.preventDefault()
//         alert('ctrl A')
//     }
// })

let x = 0 ,y = 0
addEventListener('keydown', e => {
    const ball = document.getElementById('ball')
    const move = direction =>  {
        switch (direction) {
            case 'up':
                y--
                   console.log(x,y);
                break
            case 'down':
                y++
                   console.log(x,y);
                break
            case 'left':
                x--
                   console.log(x,y);
                break
            case 'right':
                x++
                   console.log(x,y);
                break

            default:
                break
        }

            ball.style.transform = `translate(${x*20}px,${y*20}px)`
    }
/* 

    // ES REEEMPLAZADO POR LA FUNCION CON EL SWITCH
    const up = () =>{
        y--
        move()
        // console.log(x,y);
    }
    const down = () =>{
        y++
        move()
        // console.log(x,y);
    }
    const  left = () =>{
        x--
        move()
        // console.log(x,y);
    }
    const right = () =>{
        x++
        move()
        // console.log(x,y);
    } 
    
    */
    // ES REEEMPLAZADO  POR EL  CODIGO DEL SWITCH
    // const down = () => ball.style.transform = 'translateY(10%)' 
    // const left = () => ball.style.transform = 'translateX(-10%)' 
    // const right = () => ball.style.transform = 'translateX(-10%)' 

    // CUANDO DECLARAS UN SWITCH DENTRO EN UNA FUNCION SE DEBE PASAR COMO PARAMETRO EN STRING
    switch (e.key) {
        case 'ArrowUp':
            move('up')
            break
        case  'ArrowDown':
            move('down')
            break
        case  'ArrowLeft':
            move('left')
            break
        case  'ArrowRight':
            move('right')
            break
    
        default:
            break
    }
})


// SIEMPRE QUE TENGAS QUE BUSXAR UN ERROR USA LA CONSOLA
//  PARA SABER DONDE SE LOCALIZA ESE ERROR






