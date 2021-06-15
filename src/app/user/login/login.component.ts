import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName;
  password;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(data) {
    this.authService.loginUser(data.userName, data.password);
    this.goToEvents();
  }
  goToEvents() {
    this.router.navigate(['events']);
  }
}
