import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project!';
  // Khai báo mảng chứa các tháng
  months = ["Tháng 1", "Tháng 2", "Tháng 3",
    "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9",
    "Tháng 10", "Tháng 11", "Tháng 12"];
  is_available = false; // Declare varialbe is_available
}
