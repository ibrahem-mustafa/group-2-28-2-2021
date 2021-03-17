import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODO_TYPE } from 'src/app/types/todo.type';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TODO_TYPE = {
    userId: 0,
    id: 0,
    title: 'todo not Inserted',
    completed: false
  }
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  deleteTodo() {
    console.log('Try To Delete Todo')
    this.todosService.deleteTodo(this.todo.id)
  }

}
