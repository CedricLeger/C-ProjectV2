import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  credentials = {email: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}
