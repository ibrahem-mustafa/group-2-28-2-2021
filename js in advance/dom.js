// ************* querying ************ //
// 1: getElementById
// const div = document.getElementById('main')
// 2: querySelector
// const div = document.querySelector('.hello')
// 3: querySelectorAll
// const elements = document.querySelectorAll('.hello')


const container = document.querySelector('.container')


// const title = container.querySelector('.title')

// console.log(title)

// ***** Create & render Elements **** //

// 1: create element
const h1 = document.createElement('h1')
// 2: control attributes
h1.setAttribute('id', 'MainH1')
h1.setAttribute('class', 'h1 main test bla')
h1.removeAttribute('id')
// 3: control classes
console.log(h1.classList)
h1.classList.add('big')
console.log(h1.classList.contains('main'))
h1.classList.remove('main')
h1.classList.toggle('bla')
console.log(h1.classList.contains('main'))
// 4: control content
// => textContent
h1.textContent = 'Hello From JS'
// => innerText
h1.innerText = 'Hello From Inner Text'
// => innerHTML
h1.innerHTML = '<script> alert("bla") </script>'

// 5: child control
const span = document.createElement('span');
span.textContent = 'icon'

h1.appendChild(span)
h1.prepend(span)

console.log(h1)

// 6: append element to document or Other Element in Document
// document.body.prepend(h1)
container.prepend(h1)

// 7: Event Control
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const div = document.createElement('div')
    div.textContent = 'I\'m A Div';
    container.appendChild(div)
})

