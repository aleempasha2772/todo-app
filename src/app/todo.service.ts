import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { } 

  private todos : Todo[] =[
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Develop Todo App', completed: false },
  ];

  getTodo():Observable<Todo[]>{
    return of(this.todos);
  }

  addTodo(todo:Todo): void{
    this.todos.push(todo);
  } 

  toggleTodoCOmpletion(todo:Todo):void{
    const index = this.todos.findIndex(t=> t.id == todo.id);
    if(index<-1){
      this.todos[index].completed = !this.todos[index].completed;
    }
  }

  
}
