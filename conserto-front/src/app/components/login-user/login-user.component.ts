import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-login-user",
  templateUrl: "./login-user.component.html",
  styleUrls: ["./login-user.component.css"]
})
export class LoginUserComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(private routeur: Router, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginFormGroup.get('password'));
  }

  onClickSubmit(formData) {
    // this.routeur.navigate(/)
    // alert("Votre email est:" + formData.email);
  }


}
