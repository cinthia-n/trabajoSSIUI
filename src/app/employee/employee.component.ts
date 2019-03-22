import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {RegEmployeeComponent} from '../reg-employee/reg-employee.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

  employees: Employee[];
  user: FormGroup;
  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {
  }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log( this.user.value);
  }
  openRegEmployee() {
    this.dialog.open(RegEmployeeComponent, {width: '500px', height: '450px'});
  }

}
