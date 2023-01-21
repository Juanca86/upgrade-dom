// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div');
document.body.append(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
newDiv.appendChild(document.createElement('p'))

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv2 = document.createElement('div');
// let parrafo = newDiv2.document.createElement('p')
for (let i = 1; i < 7; i++) {
    let parrafo = document.createElement('p');
    parrafo.innerText = ('parrafo ' +i)
    newDiv2.append(parrafo) 
}
document.body.append(newDiv2)


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP = document.createElement('p')
newP = document.createTextNode('Soy dinamico!')
document.body.append(newP)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const wubba = document.querySelector('.fn-insert-here')
wubba.innerText = 'Wubba Lubba dub dub'
document.body.append(wubba)

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul')
const lisItem = document.createElement('li')
for( let i =0; i<apps.length; i++){
    const lisItem = document.createElement('li')
    lisItem.innerText = apps[i]
    lista.append(lisItem)
}
document.body.append(lista)
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// const remove = document.querySelectorAll('.fn-remove-me');
// remove.remove();
// const remove1 = document.querySelector('.fn-remove-me');
// remove1.remove();
// const remove2 = document.querySelector('.fn-remove-me');
// remove2.remove();
// const remove3 = document.querySelector('.fn-remove-me');
// remove3.remove();
const remove = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < remove.length; i++) {
    remove[i].remove();
}



// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const newP2 = document.createElement('p')
newP2.innerText = 'Voy en medio!'
document.body.insertBefore(newP2, newDiv2)


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const findDiv = document.body.querySelectorAll('.fn-insert-here')
for (let i = 1; i < findDiv.length; i++) {
    const newP3 = document.createElement('p')
    newP3.innerText = 'Voy dentro!'
    findDiv[i] = document.body.append(newP3)
    
}
// const newP3 = document.createElement('p')
// newP3.innerText = 'Voy dentro!'
// document.body.append(newP3, findDiv)
// const findDiv1 = document.body.querySelector('.fn-insert-here')
// const newP4 = document.createElement('p')
// newP4.innerText = 'Voy dentro!'
// document.body.append(newP4, findDiv1)