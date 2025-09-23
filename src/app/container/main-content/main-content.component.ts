import { Component } from '@angular/core';
import { CardsPanelComponent } from '../../components/cards-panel/cards-panel.component';
import { EarningReportChartComponent } from '../../components/earning-report-chart/earning-report-chart.component';
import { TransactionHistoryComponent } from '../../components/transaction-history/transaction-history.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { ImgCardComponent } from '../../components/img-card/img-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    FormsModule,
    CardsPanelComponent,
    EarningReportChartComponent,
    TransactionHistoryComponent,
    TodoListComponent,
    ImgCardComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  selectedMonth: string = this.months[new Date().getMonth()];
}
