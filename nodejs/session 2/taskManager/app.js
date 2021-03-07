// fetch data
// create element
// render data

const todoListContainer = document.querySelector(".todoListContainer");


let todoList = todoListContainer.querySelector(".todoList");

if (!todoList) {
    createElement('ul', {
        class: 'todoList',
        id: 'list'
    }, null, (ul) => {
        todoListContainer.appendChild(ul)
        todoList = ul;
    })
}



(async function fetchTodos() {
  const response = await fetch("http://localhost:3000/todos");
  const todosData = await response.json();
  todosData.slice(0, 10).forEach((todo) => renderTodo(todoList, todo));
})();


const todoForm = document.querySelector('.todoForm')
const input = todoForm.querySelector('.formInput');
const btn = todoForm.querySelector('.btn')


btn.addEventListener('click', () => {
    const todo = {
        id: new Date().getTime(),
        title: input.value
    }

    renderTodo(todoList, todo)

    input.value = '';

})

function renderTodo(list, todo) {

    createElement('li', {class: 'todo', id: todo.id}, todo.title, (li) => {

        createElement('button', {class: 'btn'}, 'X', (button) => {
            
            button.addEventListener('click', () => {
                list.removeChild(li)
            })

            li.appendChild(button)
            list.appendChild(li)

        })
    })
}

function createElement(tag, attributes, content, afterCreate) {
    const ele = document.createElement(tag);

    const attributesKeys = Object.keys(attributes)
    attributesKeys.forEach(key => {
        ele.setAttribute(key, attributes[key])
    })

    if (content) {
        ele.textContent = content;
    }
    afterCreate(ele)
}
