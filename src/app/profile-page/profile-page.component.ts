import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  username: string;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.username = this.route.snapshot.params['username'];
    console.log(this.username + "From profile component");
    this.loginService.getEmployee(this.username)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  logout(){
    this.router.navigate(['login']);
  }

}
