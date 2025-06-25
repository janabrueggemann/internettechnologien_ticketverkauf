import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private httpClient: HttpClient) {}

  // Die Methode gehört hier in die Komponenten-Klasse
  getWebsite() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(data => {
      console.log(data);
    });
  }
}