
//****************************OBJETO WINDOW*********************************************

// console.log('con lo que sea ');

// window.open('https://ed.team','EDteam','width=360,heigth=240')

// const form =document.getElementById('responsive-tester-form')
// if (form) {
//     form.addEventListener('submit',() => {
//         let width=form.querySelector('#width'),
//         height=form.querySelector('#height'),
//         url = form.querySelector('#url')

//         if (width && height && url) {
//             width = width.value
//             height = height.value
//             url = url.value
            
//         }
//         window.open(url,url,`innerWidth=${width},innerHeight=${height}`)
//     })
    
// }

// ***************************OBJETO LOCATION************************************************
// traer urls externas
// let links = document.links

// for (let link of links) {
//    if (link.href.includes(location.host)) {
    //        link.style.background = 'yellow'
//    }
    
// }

// buscar la ruta del dominio
// location.pathname

// agrega una clase al body de la ruta
// /cursos/android-firebase
// if (location.pathname.includes('cursos')) {
    //     document.body.classList.add('cursos-page')
    // }
    
     
    //********************************TIMERS***************************
    // setTimeout(()=> {
    //     alert('HOLA MUNDO')
    
    // },3000)


    // let contador = 0
    // const saludarMuchasVeces = setInterval(() => {
    //    contador++
    //    if (contador>1) {
    //        console.log(`hola  ${contador} veces`);
    //     } else{
    //        console.log(`hola  ${contador} veZ`);

    //    }
    //    if (contador === 20) {
    //        clearInterval(saludarMuchasVeces)
    //    }
    // }, 1000);

    // console.log(new Date().toString());
    // console.log(new Date().toLocaleString());
    // console.log(new Date().toLocaleTimeString());

    // setInterval(() => {
    //         const clock= document.getElementById('clock')
    //         if(clock) clock.textContent =new Date().toLocaleTimeString()
    // },1000);

//**********************DATE***********************************

// const timeZomeOffSet = new Date().getTimezoneOffset()
// console.log(timeZomeOffSet);


const birthday = new Date(1993,9,5)
const act = new Date(2021,1,21)

const getSeconds = ms => Math.round(ms/1000)
const getMinutes = ms => getSeconds(ms) / 60
const getHours = ms => getMinutes(ms) / 60
const getDay = ms => getHours(ms) / 24
const getMonth = ms => getDay(ms) / 30
const getYears = ms => getMonth(ms) / 12


// console.log(act-birthday);
console.log(getMinutes(act-birthday));
console.log(getHours(act-birthday));
console.log(getDay(act-birthday));
console.log(getMonth(act-birthday));
console.log(getYears(act-birthday));




