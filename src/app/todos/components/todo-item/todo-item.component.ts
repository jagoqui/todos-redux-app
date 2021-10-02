import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Todo} from "../../models/todo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-reducer";
import {completeAll, drop, edit, toggle} from "../../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @ViewChild('inputEdit') inputEdit: ElementRef | undefined;

  checkCompleted: FormControl;
  txtInputEdit: FormControl;
  editing: boolean = false;

  constructor(private storeSvc: Store<AppState>) {
    this.checkCompleted = new FormControl(false);
    this.txtInputEdit = new FormControl('', [Validators.required, Validators.minLength(10)]);
  }

  onEdit() {
    this.editing = true;
    this.txtInputEdit.setValue(this.todo?.text);
    setTimeout(() => {
      this.inputEdit?.nativeElement.select();
    }, 1);
  }

  editionEnd() {
    const {value} = this.txtInputEdit;
    this.txtInputEdit.setValue(value.trim());
    this.editing = false;
    if (this.txtInputEdit.invalid || value === this.todo?.text) {
      return;
    }
    if (this.todo) {
      const {id} = this.todo;
      this.storeSvc.dispatch(edit({id, text: value}))
    }
  }

  onDelete() {
    if (this.todo && confirm('Are you sure?')) {
      const {id} = this.todo;
      this.storeSvc.dispatch(drop({id}));
    }
  }

  ngOnInit(): void {
    if (this.todo) {
      const {id} = this.todo;
      this.checkCompleted.setValue(this.todo.completed);
      this.txtInputEdit.setValue(this.todo.text);
      this.checkCompleted.valueChanges.subscribe((_) => this.storeSvc.dispatch(toggle({id})));
    }
  }
}
