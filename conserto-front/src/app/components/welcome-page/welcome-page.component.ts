import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }

}
}
