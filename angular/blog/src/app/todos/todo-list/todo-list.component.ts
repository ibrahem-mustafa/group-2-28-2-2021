import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODO_TYPE } from 'src/app/types/todo.type';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  constructor(private todosService: TodosService) {}


  ngOnInit(): void {

  }

  get todos() {
    return this.todosService.getTodos()
  }




}
