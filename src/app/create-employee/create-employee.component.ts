import { EmployeeListComponent } from './../employee-list/employee-list.component';
import { Router } from '@angular/router';
import { EmployeeService } from './../../service/employee.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted: boolean = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee;
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      this.employee = new Employee();
      // this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/employees'])
  }

}
