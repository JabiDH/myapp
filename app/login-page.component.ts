
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})

export class LoginPageComponent{

  constructor(public fb: FormBuilder){}

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  doLogin(event){
    console.log(event);
    console.log(this.loginForm.value);
  }
}