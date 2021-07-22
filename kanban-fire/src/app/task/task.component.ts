import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task | undefined;
  @Output() edit =new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

}
