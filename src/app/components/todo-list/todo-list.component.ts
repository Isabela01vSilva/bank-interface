import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [
    { title: 'Run Payroll', date: 'Mar 4', time: '6:00pm', amount: 120 },
    { title: 'Review time off request', date: 'Mar 4', time: '6:00pm', amount: 120 },
    { title: 'Finish onboarding Tony', date: 'Mar 4', time: '6:00pm', amount: 120 }
  ];
}
