import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginService: any;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  LoginForm: FormGroup;
  OtpForm: FormGroup;

  showErrors = false;
  submitted = false;
  optBox = false;

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      'mobileNo': new FormControl(null, { validators: [Validators.required] })
      // quantity: this.fb.control(123)
    })

    // this.LoginForm = new FormGroup({
    //   'mobileNo': new FormControl(null, { validators: [Validators.required] })
    // });
    sessionStorage.clear();
  }
  ngAfterViewInit(){
    this.OtpForm = this.formBuilder.group({
      'optNumber': new FormControl(null, { validators: [Validators.required] })
      // quantity: this.fb.control(123)
    })
  }

  loginSubmit() { // valid login function 
    this.submitted = true;
    if (this.LoginForm.valid) {
      this.verifyLogin();
    } else {
      this.showErrors = true;
      console.log('%c value is not filled', 'color:red');
    }
  }


  verifyLogin() { //verifying the user's mobile no
    this.optBox = true;
    this.loginService.loginApi(this.LoginForm.value)
      .subscribe(
        (exp_res) => {
          if (exp_res.status === 'success') {
            sessionStorage.setItem('userData', JSON.stringify(exp_res.data.user));
            sessionStorage.setItem('token', JSON.stringify(exp_res.data.token));
            this.optBox = true;
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

  otpSubmit() { // valid otp number function 
    console.log('hiui');
    this.submitted = true;
    if (this.OtpForm.valid) {
      // this.OtpLogin();
    } else {
      this.showErrors = true;
      console.log('%c value is not filled', 'color:red');
    }
  }
  OtpLogin(){
    this.loginService.otpApi(this.OtpForm.value)
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
