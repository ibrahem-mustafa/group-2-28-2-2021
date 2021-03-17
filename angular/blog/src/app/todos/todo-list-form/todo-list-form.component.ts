import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODO_TYPE } from 'src/app/types/todo.type';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {


  constructor(private todosService: TodosService) { }

  todoTitle: string = ''

  ngOnInit(): void {
  }

  addTodo() {
    const todo: TODO_TYPE = {
      userId: 0,
      id: new Date().getTime(),
      title: this.todoTitle,
      completed: false
    }
    this.todosService.insertTodo(todo)
    this.todoTitle = '';
  }

}
