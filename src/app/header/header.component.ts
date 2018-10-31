import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  public token;

  ngOnInit() {
  }
  ngAfterContentChecked() {
    if (sessionStorage.getItem('userData')) {
      this.token = sessionStorage.getItem('userData');
    } else {
      this.token = undefined;
    }
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
    this.token = undefined;
  }
}
