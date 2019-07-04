import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onClickSubmit(formData) {
    alert('Votre email est:' + formData.email);
  }
}
