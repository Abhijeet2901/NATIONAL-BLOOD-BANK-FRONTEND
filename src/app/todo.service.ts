import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url:string="http://localhost:3000/bloodstock/"
  constructor(private http:HttpClient) { }

  getAllTodos()
  {
    return this.http.get(this.url);
  }

  getTodoById(id:any)
  {
    return this.http.get(this.url+id);
  }

  updateTodo(todo:any)
  {
    return this.http.put(this.url+todo.id,todo);
  }
}
