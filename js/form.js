// alert('hello woed')
// ¨***************EVNETOS DEL  FORMULARIO**********************
// addEventListener('DOMContentLoaded',() =>{
// const form = document.getElementById('form')
// const remenberPassword = document.getElementById('remenberPassword')

// form.addEventListener('submit', () => {
//     console.log('ha enviado el formulario')
// })

// remenberPassword.addEventListener('change', e => {
//     if (e.target.checked) {
//         console.log('el usuario quiere recordar la contraseña');
//     }else{
//         console.log('el usuario no quiere recordar la contraseña ');
//     }

// })

// })

//****************EVENTOS  DEL DOM**************************
// addEventListener('scroll', e => {
//     console.log(scrollX, scrollY);
// })

// addEventListener('resize', e => {
//     console.log(innerWidth, innerHeight)
//     console.log(outerWidth,outerHeight)
// })

// ************EVENTOS MULTIMEDIA****************************

// const video = document.getElementById('video',),
//     playButton = document.getElementById('play'),
//     pauseButton = document.getElementById('pause')

//     // los eventos se escuchan Y TAMBIÉN SE PUEDEN EJECUTAR 
//     playButton.addEventListener('click', () =>{
//         video.play()
//     })
//     pauseButton.addEventListener('click', () =>{
//         // playButton.click()
//         video.pause()
//     })

// *********************PROPAGACIÓN DE EVENTOS******************

// const div1=document.getElementById('div-1');
// const div2=document.getElementById('div-2');
// const div3=document.getElementById('div-3');

// TAMBIEN SE PUEDE ARMAR EN UN ARRAY
// document.querySelectorAll('div').forEach(el => {
//     el.addEventListener('click',e =>{
//         console.log(`hiciste click en el div ${e.target.id}`);
//         e.stopPropagation()
//     })

// })

// *****************DELEGACIÓN DE EVENTOS  ***********************
const gallery = document.getElementById('gallery');
gallery.addEventListener('click',e => {
    const t= e.target,
            images=Array.from(gallery.querySelectorAll('img')),
            i=images.indexOf(t)
    console.log(`hiciste click en la imagen ${i+1}`);
})






