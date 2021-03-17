import { Injectable } from '@angular/core';
import { TODO_TYPE } from '../types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  private _todos: TODO_TYPE[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];

  insertTodo(todo: TODO_TYPE) {
    this._todos.push(todo)
  }

  getTodos() {
    return this._todos.slice();
  }

  deleteTodo(id: number) {
    const todoIndex = this._todos.findIndex((todo) => todo.id == id);
    if (todoIndex > -1) {
      this._todos.splice(todoIndex, 1);
    }
  }
}
