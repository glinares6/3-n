// alert('manipular Dom')

// ********************RECORRIENDO EL DOM******************************
// HIJOS  -> deciende in vivel inferior

// SE VA A REUTILIZAR EL CODIGO EN LOS SIGUIENTES EJEMPLOS**************
const parent = document.getElementById('parent')
const grandson = document.getElementById('grandson-2')

// console.log(parent.children);
// console.log(parent.children[2]);

// para obtener los hijos y los nietos se usar querySelector
// console.log(parent.querySelectorAll('div'));
// console.log(parent.childNodes);


// console.log(parent.firstElementChild.firstChild);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// PARA ELEGIR UN HIJO PERSONALIZADO O POR MEDIO DE UN FOR 
// console.log(parent.childNodes[5]);

// Para acceder a un elemento en particular 
// console.log(parent.childNodes[3].childNodes[5]);
// console.log(parent.childNodes[3].childNodes[5].firstChild);

// TE DEVUELVE SI TIENE HIJOS O NO EN BOOLEAN
// console.log(parent.hasChildNodes());


// HERMANOS -> selecciona el mismo nivel

// console.log(grandson.nextElementSibling);
// console.log(grandson.nextSibling);
// console.log(grandson.nextElementSibling.firstChild);
// console.log(grandson.previousSibling);

// retorna al elemento original 
// console.log(grandson.previousSibling.nextSibling.firstChild);
// console.log(grandson.previousSibling.nextSibling.lastChild.textContent);

// PADRE|

// console.log(grandson.parentElement.parentElement);
// console.log(parent.childNodes[3].childNodes[3].parentElement);

// **********************INSERTAR ELEMENTOS*************************************

// const newElement =document.createElement('h2')
// newElement.textContent ='soy un nuevo elemento'
// parent.appendChild(newElement)


// const childs = Array.from(parent.children),
//     childParent = childs.filter(child => child.children.length > 0)[0],
//     grandSons = Array.from(childParent.children),
//     grandSon3 = grandSons.filter(child => child.textContent.trim() === 'Nieto 3')[0]
//     // para traer al hijo con los nietos
//     const vhildWithChilds = childs.filter(child => child.children.length > 0)[0]

// const newElement =document.createElement('h2')
// newElement.textContent ='soy un nuevo elemento'


// childParent.insertBefore(newElement,grandSon3)


// *******************EJERCICIO CON EL INSERTBEFORE*********************************
// const post = document.getElementById('post')
// // const postParagraphs = post.querySelectorAll('p')
// const ad = document.createElement('div');
// ad.id= 'team'
// ad.textContent = 'Publicidad'

// const getMiddleChild = element => {
//     const childs =element.children,
//     l = childs.length,
//     i = Math.floor(l/2)
// return childs[i]
// }


// // console.log(getMiddleChild(post));
// const middleChild = getMiddleChild(post)
// post.insertBefore(ad,middleChild)

//******************INDERTANDO ELEMENTOS CON ADJACENT*******************************


// EL PARENT ESTA AL INICIO EL JS
// const ad = document.createElement('div');
// ad.id= 'team'
// ad.textContent = 'Publicidad'

// parent.insertAdjacentElement('beforebegin',ad)
// parent.insertAdjacentElement('afterbegin',ad)
// parent.insertAdjacentElement('afterend',ad)
// parent.insertAdjacentElement('beforeend',ad)
// parent.insertAdjacentText('afterbegin','hola mundo') 

//PARA INTRODUCIR HTML
// parent.insertAdjacentHTML('afterbegin',`<h1><em> soy el titulo principal</em></h1>`) 

// SE SUSTITUYE POR UN NUEVO ELEMENTO
// parent.replaceChild(newChild,oldChild)
// parent.replaceChild(ad,parent.children[0])

// **************************METODOS DEL JQUERY === ADJECEND***********************************
// es la misma sintaxis que el adjacent

// const ad = document.createElement('div');
// ad.id= 'team'
// ad.textContent = 'Publicidad'

// parent.before(ad)
// parent.prepend(ad)
// parent.append(ad)
// parent.after(ad)

// sustituye al elemento
// parent.children[0].replaceWith(ad)

// C***************************LONAR Y ELIMINAR********************************
// el console.log es para verificar si el dato a enviar es valido   
// const clon = parent.childNodes[1].firstChild.cloneNode(true);
// console.log(clon);
// parent.prepend(clon)
// clon.remove()


// *******************CREAR ELEMENTOS Y FRAGMENTOS******************
// const teachers = ['Alexys', 'Alvaro','Beto','Jhon']
// const   teacherList = document.createElement('ul')
// const teacherListContainer= document.getElementById('teacher-list')
// const teacherListFragment = document.createDocumentFragment()
//     teacherListContainer.appendChild(teacherList)
// for (let teacher  of teachers){
//     const li= document.createElement('li')
//     teacherListFragment.appendChild(li)
//     li.textContent = teacher
// }

// teacherList.appendChild(teacherListFragment)


// *********************TEMPLATES EN HTML******************************
// const template = document.getElementById('template')

// const myNewTemplate = template.content.cloneNode(true)
// myNewTemplate.querySelector('h2').textContent= 'ED team'
// myNewTemplate.querySelector('p').textContent= 'Tu futuro esta esperando'

// document.getElementById('content').appendChild(myNewTemplate)


//*******************************CSSON********************************

const title = document.querySelectorAll('h1')[6]
const description = document.querySelector('p')
// title.style.backgroundColor= 'red'
// const mediunBp = matchMedia('(min-width: 640px) and (orientation: portrait)')
// description.style.background = 'green'

    // if (window.innerWidth > 640) {
    //     document.body.style.background = 'yellow'
    // }

//     const changeColor = () => {
//         if (mediunBp.matches) {
//             document.body.style.background ='red'
//         }else{
//             document.body.style.background = 'yellow'
//         }
        
//     }
//  addEventListener('resize',changeColor)
//  addEventListener('DOMContentLoaded',changeColor)

// console.log(getComputedStyle(title).fontSize);
// console.log(getComputedStyle(document.body).fontSize);
// console.log(getComputedStyle(document.body).display);

// const tamanio = document.body.getBoundingClientRect().height;
// const tamanio = document.body.getBoundingClientRect().width;
const tamanio = document.body.getBoundingClientRect().top;
// const tamanio = document.body.getBoundingClientRect().bottom;



console.log(tamanio);