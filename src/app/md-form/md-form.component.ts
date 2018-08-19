import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent implements OnInit {

  private genderList = ['Male', 'Female'];
  private user: User;
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormGroup({
        pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPwd: new FormControl('', [Validators.required, Validators.minLength(8)])
      }),      
      gender: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.requiredTrue)
    })
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get gender() {
    return this.signupForm.get('gender');
  }

  get terms() {
    return this.signupForm.get('terms');
  }

  if(this.signupForm.valid) {
    this.user = this.signupForm.value;
    console.log(this.user);
    /* Any API call logic via services goes here */
  }


}
