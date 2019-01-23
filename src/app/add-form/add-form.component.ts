import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  @Output () addTodoEvent = new EventEmitter ();

    
   addTodo($event){
      this.addTodoEvent.emit(this.todoText);
    }
    
    placeholderText = "請在此輸入待辦事項";
    
    todoText = ''
  


}
