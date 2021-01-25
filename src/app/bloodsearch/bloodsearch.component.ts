import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-bloodsearch',
  templateUrl: './bloodsearch.component.html',
  styleUrls: ['./bloodsearch.component.css']
})
export class BloodsearchComponent implements OnInit {
  todos:any;
    id:any;
    todo:any;
    todoForm:any;
constructor(private y:TodoService,private bs:FormBuilder) {
  this.todoForm=bs.group({
      id:new FormControl(),
      userId:new FormControl(),
      title:new FormControl()
  });
 }

  ngOnInit(): void {
    this.fnGetAllTodos();
  }

  fnGetAllTodos()
  			{
			    this.y.getAllTodos().subscribe(data=>this.todos=data);
        }

        fnGetTodoById()
        {
          this.y.getTodoById(this.id).subscribe(data=>this.todoForm.patchValue(data));
        }

        fnUpdateTodo()
        {
          // alert("updating...");
          this.todo=this.todoForm.value;
          // alert(employee.id);
          let result:any;
          this.y.updateTodo(this.todo).subscribe(data=>{
            result=data;
            this.fnGetAllTodos();
            this.fnGetTodoById();
          }
        );

}
}
