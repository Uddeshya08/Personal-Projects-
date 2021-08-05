import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';
import {MatDialog} from '@angular/material/dialog';
import { TaskDialogComponent,TaskDialogResult } from './task-dialog/task-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk',
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!',
    },
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog){}

  editTask(list: string, task: Task): void {}

  newTask(): void{
    const dialogRef = this.dialog.open(TaskDialogComponent,{
      width:'278px',
      data:{
        task:{},
      },
    });
    dialogRef
    .afterClosed()
    .subscribe((result: TaskDialogResult) => this.todo.push(result.task));
  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}

