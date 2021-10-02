import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Store} from '@ngrx/store';
import {create} from "../../todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  txtInput: FormControl;

  constructor(private storageSvc: Store) {
    this.txtInput = new FormControl('',[Validators.required, Validators.minLength(3)]);
  }

  onAdd() {
    const {value} = this.txtInput;
    this.txtInput.setValue(value.trim());
    if (this.txtInput.valid) {
      this.storageSvc.dispatch(create({text: value}));
      this.txtInput.setValue('');
    }
  }
}
