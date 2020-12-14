import { Router } from '@angular/router';
import { LoginInfo } from './../../model/loginInfo';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginInfo: LoginInfo = new LoginInfo();
  submitted: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  newLoginInfo(): void {
    this.submitted = false;
    this.loginInfo = new LoginInfo;
  }

  authenticate() {
    this.loginService.loginAuthentication(this.loginInfo)
      .subscribe(
        data => {
          console.log(data);
          if(this.loginInfo.username === "ADMIN"){
            console.log("ADMIN has logged in");
            this.router.navigate(['/employees']);
          }
        },
        error => {
          console.log(error);
          this.router.navigate(['/login']);
        }
      );
      // this.loginInfo = new LoginInfo();
      this.goToList(this.loginInfo.username);
  }

  onSubmit() {
    this.submitted = true;
    this.authenticate();
  }

  goToList(username: string) {
    console.log("username:" + username);
    this.router.navigate(['profile', username]);
  }

}
