import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  greeting: string = '';

  ngOnInit(): void {
      const hour = new Date().getHours();

      if(hour >= 5 && hour < 12) {
        this.greeting = 'Bom Dia, ';
      } else if(hour >= 12 && hour < 18) {
        this.greeting = 'Boa Tarde,'
      } else {
        this.greeting = 'Boa Noite, '
      }
  }
}
