// alert('hola que hace')
// console.log(document.getElementById('title'));
// **********************NODOS************************
// no requiere el simbolo gato el en getElementById
// const title = document.getElementById('title')
// se puede seleccionar el colecror css
// const title2 =document.querySelector('#title')
// const listItem =document.querySelectorAll('ul li')
// const secondItem =document.querySelector('ul li:nth-child(3)')
// const  list =document.getElementById('list')

// *****************NODOS **************************************
// title.style.background = 'yellow';

// console.log(title);
// console.log(title2);
// console.log(listItem);
// console.log(secondItem);
// console.log(list.querySelector('li:last-child') );


//  ******************** ELEMENTOS Y COLECCIONES****************************
// map reduce 
// const elementList = document.getElementsByTagName('li')
// const nodeList = Array.from(document.querySelectorAll('li'))

// console.log(nodeList)
// // console.log(elementList)

// nodeList.map(el =>{
//     if(el.textContent.trim().toUpperCase() ===  'OBJETO'){
//         el.remove();
//     }

// })

// for (let el  of nodeList) {
//      if(el.textContent.trim().toUpperCase() === 'OBJETO'){
//          el.remove()
//      }

// ************************ATRIBUTO****************************

// const title = document.getElementById('title')

// if (title) {
//     title.style.background= 'yellow'
// }

// validar el id siempre

// console.log(title.getAttribute('class'));
// console.log('hola  mundo');


// const title= document.querySelector('h1')
// title.setAttribute('id','title2 ')
// title.id= 'title'
// console.log(title);

// propiedad classList
// console.log(title.classList);

// lo mismo para remove y togle
// title.classList.add('main-title', 'title-from-page')

// ***************CONTENIDO****************************
// back tics  `` en vez del  string para agregar valores dinamicos 
// const title= document.querySelector('h1')
// console.log(title.textContent);
// console.log(title.innerHTML);
// console.log(title.outerHTML);

// title.innerHTML = `hola mama <em>estoy en clase</em>`

// *********************CREAR ELEMENTOS*****************************
// const title= document.querySelector('h1')
// // crea el atrinuto , luego  busca el elemento  y lo agreda al DOM con appendChild
// const profesor = document.createElement('p')
// const profesorContainer = document.getElementById('teacher')

// profesor.textContent = 'gianmarco lina'
// profesor.classList.add('teacher')


// if (profesorContainer && profesorContainer.querySelector('span')) {
//         profesorContainer.querySelector('span').appendChild(profesor)
// }


