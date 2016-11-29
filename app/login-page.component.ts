
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroapiService } from './heroapi.service';

@Component({
  moduleId: module.id,
  selector: 'login-page',
  templateUrl: 'login-page.html'
})

export class LoginPageComponent {
  email='gabih@sedata.com';
  constructor(public fb: FormBuilder, private apiservice: HeroapiService, private router: Router) { }

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
    let userdata = this.loginForm.value;
    this.apiservice.login(userdata.email, userdata.password)
      .subscribe(userAccount => {
        console.log("Login: ");
        console.log(userAccount);
      },
      err => {
        console.log(err);
      }
      );
  }
}