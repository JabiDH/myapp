
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HeroapiService } from './heroapi.service'

@Component({
  selector: 'login-page',
  templateUrl: 'app/login-page.html'
})

export class LoginPageComponent {

  constructor(public fb: FormBuilder, private apiservice: HeroapiService) { }

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);

    let userdata = this.loginForm.value;
    this.apiservice.login(userdata.email, userdata.password)
      .subscribe(ua => {
        console.log(ua);
      },
      err => {
        console.log(err);
      }
      );
  }
}