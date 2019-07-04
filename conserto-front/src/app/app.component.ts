import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  onClickSubmit(formData) {
    alert("Votre email est :" + formData.email);
  }
}
