import { EmployeeService } from './../../service/employee.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/*
 * This component is used to display the list of employees 
 */

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe( data => {
         console.log(data);
         this.reloadData(); 
      }, 
      error => console.log(error));
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  addEmployee() {
    this.router.navigate(['add']);
  }
}
