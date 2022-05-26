import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  menu:MenuItem[]=[
    new MenuItem("Pizza", "dinner", 11.99),
    new MenuItem("Wings", "dinner", 15.00),
    new MenuItem("Breadsticks", "appetizer", 5.99),
    new MenuItem("Chicken tenders", "appetizer", 8.99),
    new MenuItem("Soda", "beverage", 3.99),
    new MenuItem("Cookie", "dessert", 5.99)
  ];

}

