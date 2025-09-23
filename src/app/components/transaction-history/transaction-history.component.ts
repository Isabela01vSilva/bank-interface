import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {
 transactions = [
    { date: '2025-09-18', description: 'Compra Mercado', amount: 120, type: 'expense' },
    { date: '2025-09-17', description: 'Salário', amount: 2500, type: 'income' },
    { date: '2025-09-16', description: 'Uber', amount: 35, type: 'expense' },
    { date: '2025-09-15', description: 'Freelance', amount: 400, type: 'income' }
  ];
}
