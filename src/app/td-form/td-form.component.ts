import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  //Property for gender
  private gender: string[];
  //Property for the user
  private user: User;
  constructor() { }

  ngOnInit() {
    this.gender = ['Male', 'Female'];
    //create new user object
    this.user = new User({
      email: "",
      password: {
        pwd: "",
        confirmPwd: ""
      },
      gender: this.gender[0],
      terms: false 
    });
  }

  onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    console.log("Data", value);
  }
}
