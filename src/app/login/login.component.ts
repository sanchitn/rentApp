import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private loginService: LoginService, private formBuilder: FormBuilder) { }

  LoginForm: FormGroup;
  OtpForm: FormGroup;

  showErrors = false;
  message = '';
  submitted = false;
  optBox = false;
  otpPayload = {};
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  ngOnInit() {
    sessionStorage.clear();
    this.LoginForm = this.formBuilder.group({
      'mobileNumber': new FormControl(null, { validators: [Validators.required, Validators.pattern(this.mobnumPattern)] })
    });

  }
  ngAfterViewInit() {
    this.OtpForm = this.formBuilder.group({
      'otp': new FormControl(null, { validators: [Validators.required] })
      // optNumber: this.formBuilder.control(123)
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
    this.loginService.loginApi(this.LoginForm.value)
      .subscribe(
        (exp_res) => {
          if (exp_res.code === 200) {
            // exp_res.userId = 'user';
            // sessionStorage.setItem('userData', JSON.stringify(exp_res));
            // localStorage.setItem('userId', exp_res.userId);
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
    this.submitted = true;
    if (this.OtpForm.valid) {
      this.otpPayload = {
        'otp':this.OtpForm.controls.otp.value,
        'mobileNumber': this.LoginForm.controls.mobileNumber.value,
        'role_id': 1
      };
      this.OtpLogin();
    } else {
      this.showErrors = true;
      console.log('%c value is not filled', 'color:red');
    }
  }
  OtpLogin() { //otp verify with login
    this.loginService.otpApi(this.otpPayload)
      .subscribe(
        (exp_res) => {
          if (exp_res.code === 200) {
            sessionStorage.setItem('userData', JSON.stringify(exp_res.token));
            if(localStorage.getItem('userId') === exp_res.data.userId){
              this.router.navigate(['cart']);
            }else{
              localStorage.setItem('userId', exp_res.data.userId);
              this.router.navigate(['vendorSearch']);
            }
          } else {
            this.message = exp_res.message;
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
