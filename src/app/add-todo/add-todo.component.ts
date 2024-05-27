import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {


  title!: string;
  constructor( private todoService:TodoService) { }


  addTodo():void{
    const newTodo: Todo = { id: Date.now(), title: this.title, completed: false };

    this.todoService.addTodo(newTodo);
    this.title = '';
  }

}
