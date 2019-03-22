import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reg-employee',
  templateUrl: './reg-employee.component.html',
  styleUrls: ['./reg-employee.component.scss']
})
export class RegEmployeeComponent implements OnInit {
  user: FormGroup;
  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log( this.user);
  }

}
