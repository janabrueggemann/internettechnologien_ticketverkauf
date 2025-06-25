import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  bild1: string = 'assets/images/ticket_seller_logo.png';
  // httpClient: HttpClient;
  // constructor(httpClient:HttpClient) {
  //   this.httpClient = httpClient;
  //  }

  //  public getWebsite(){
  //    this.httpClient.get("api/test").subscribe(data => {
  //     console.log(data);
  //    }

  //   );
  //  }

}
