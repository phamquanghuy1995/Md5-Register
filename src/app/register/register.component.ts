import { Component, OnInit } from '@angular/core';
import {Register} from '../register';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  constructor() { }

  get nameControl() {
    return this.registerForm.get('name');
  }
  get emailControl() {
    return this.registerForm.get('email');
  }
  get passwordControl() {
    return this.registerForm.get('password');
  }
  get confirmPasswordControl() {
    return this.registerForm.get('confirmPassword');
  }
  get countryControl() {
    return this.registerForm.get('country');
  }
  get ageControl() {
    return this.registerForm.get('age');
  }
  get genderControl() {
    return this.registerForm.get('gender');
  }
  get phoneControl() {
    return this.registerForm.get('phone');
  }

  ngOnInit() {
  }

  CreateRegister(registerForm) {
    console.log(registerForm.value);
  }
}
