import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_TYPE } from '../types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  private _todos: TODO_TYPE[] = [];

  async fetchTodos() {
    try {
      const data = await this.http
      .get<TODO_TYPE[]>('http://jsonplaceholder.typicode.com/todos/?_limit=10')
      .toPromise();
    this._todos = data
    } catch(err) {
      console.log(err)
    }
  }

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
