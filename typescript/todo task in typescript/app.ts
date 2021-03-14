const todoListContainer = document.querySelector(
  ".todoListContainer"
) as HTMLDivElement;

let todoList = todoListContainer.querySelector('.todoList') as HTMLUListElement

if (!todoList) {
  todoList = createElement('ul', { class: 'todoList' }) as HTMLUListElement;
  todoListContainer.appendChild(todoList);
}

type TODO_TYPE = {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

let todos: TODO_TYPE[] = [];
// Fetch Todos
(async function fetchTodos(): Promise<void> {
  const response = await fetch("http://jsonplaceholder.typicode.com/todos/")
  const data: TODO_TYPE[] = await response.json()
  
  // render todos in dom (todoList)
  todos = data.slice(0, 10);
  todos.forEach((todo) => renderTodo(todoList, todo));
})()


// take todo from user and insert it to (todoList)

const formContainer = document.querySelector('.todoForm');
const input = formContainer.querySelector('.formInput') as HTMLInputElement
const button = formContainer.querySelector('.formBtn') as HTMLButtonElement

button.addEventListener('click', () => {
  
  const todo: TODO_TYPE = {
    userId: 1,
    id: todos.length,
    title: input.value,
    completed: false
  }

  todos.push(todo);
  renderTodo(todoList, todo);
  input.value = ''

})


// ** //////////////// ** //
// crete element function
// params => tag, attributes, content
function createElement(tag: string, attributes: Record<string, any>, content?: string,): HTMLElement {
  const ele: HTMLElement = document.createElement(tag);
  const keys = Object.keys(attributes)

  for (let key of keys) {
    ele.setAttribute(key, attributes[key])
  }

  if (content) {
    ele.textContent = content;
  }
  return ele;
}

// render todo function

function renderTodo(list: HTMLUListElement, todo: TODO_TYPE) {

  const li = createElement('li', { id: todo.id, class: 'todoListItem' }, todo.title)

  const xButton = createElement('button', {class: 'btn'}, 'X') as HTMLButtonElement
  
  li.appendChild(xButton)

  xButton.addEventListener('click', () => {
    list.removeChild(li)
  })

  list.appendChild(li)
}