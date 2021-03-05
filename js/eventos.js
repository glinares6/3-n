const title = document.getElementById('title');
const navegador = document.getElementById('navegador');

// title.addEventListener('eventName',eventHandler)
// eventHandler -> función que se ejecuta  otra unstrucción 

// const holaMundo = () => alert('Hola Mundo')

const holaMundo = e => alert(e.target.textContent)
const nav = e => console.log(e.target.textContent)

// title.addEventListener('click',() =>{

//     alert('Hola Mundo')
// }
// )

if (title) {
    
    title.addEventListener('click', e =>{
        holaMundo(e)
    })

}

// navegador.addEventListener('dblclick', e =>{
    //     holaMundo(e)
    // })

// SE PARECE AL EVENTO HOVER DE CSS
// cuando sale del evento se se ejecuta la función 
// navegador.addEventListener('mouseleave', e =>{
//     holaMundo(e)
// })


// CUANTO ENTRA AL ENLACE SE DISPARA EL EVENTO
// navegador.addEventListener('mouseenter', e =>{
//     holaMundo(e)
// // })

// AL HACER CLICK DERECHO SE MUESTRA  EN PANTALLA LO QUE QUIERES EJECUTAR
const createMenu = e =>{
    const menu = document.createElement('div')
    const prevMenu = document.getElementById('context-menu') 
    menu.id='context-menu'
    menu.textContent = 'soy un menu contextual'
    
    if (prevMenu) document.body.removeChild(prevMenu)
    document.body.appendChild(menu) 

    menu.style.padding = '1em'
    menu.style.background = '#eee'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`
}
document.addEventListener('contextmenu', e =>{
    // console.log(e.pageX,e.pageY)
    createMenu(e)
    e.preventDefault()
})

document.querySelector('button').addEventListener('click', e => {
    holaMundo(e)

})

// mouseDown -> cuando matiene presionado el mouse en el evento 
// mouseUp -> cuanto  lugo de presionar  sueltas el mouse se dispara el evento



