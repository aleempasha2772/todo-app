import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  //creating a dictionary to save data coming from service
  todos:Todo[] = [];

 //instaciating todoService in the constructor
  constructor(private todoService:TodoService) { }


  //when ever this component is called it automatically calls the getTodo method
  ngOnInit(): void {
    this.todoService.getTodo().subscribe(todos=>this.todos = todos);
  }

  
  toggleCompletion(todo:Todo):void{
    this.todoService.toggleTodoCOmpletion(todo);
  }



}
