import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginService: any;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  LoginForm: FormGroup;
  showErrors = false;
  submitted = false;

  ngOnInit() {
    this.LoginForm = new FormGroup({
      'mobileNo': new FormControl(null, { validators: [Validators.required] })
    });
    sessionStorage.clear();
  }

  loginSubmit() {
    this.submitted = true;
    if (this.LoginForm.valid) {
      this.verifyLogin();
    } else {
      this.showErrors = true;
      console.log('%c value is not filled', 'color:red');
    }
  }

  verifyLogin() {
    this.loginService.loginApi(this.LoginForm.value)
      .subscribe(
        (exp_res) => {
          if (exp_res.status === 'success') {
            sessionStorage.setItem('userData', JSON.stringify(exp_res.data.user));
            sessionStorage.setItem('token', JSON.stringify(exp_res.data.token));
            this.router.navigate(['vendorSearch']);
          } else {
            this.showErrors = true;
            this.submitted = false;
          }
        },
        (error: Error) => {
          this.showErrors = true;
          this.submitted = false;
        }
      );
  }
}
