import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output()
  taskAdded = new EventEmitter<string>();

  @Input()
  newTask: EventEmitter<string>;

  constructor() { }

  ngOnInit() {
  }



  addTask(form: NgForm) {
    const descriptionValue = form.value.description;
    console.log(descriptionValue);
  }
}
