import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'internettechnologien_ticketverkauf';
  bild1: string = 'assets/images/ticket_seller_logo.png';
  
  //  httpClient: HttpClient;
  //  constructor(httpClient:HttpClient) {
  //    this.httpClient = httpClient;
  //   }
 
//     testClick()
//    {
//      console.log("click");
//    this.httpClient.get("api/test").subscribe(data => {
//        console.log(data);
//      });
//  }  

}