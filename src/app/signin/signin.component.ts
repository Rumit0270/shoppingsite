import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  allData: any;

  registeredUsers = [];

  displayError: boolean = false;

  constructor(private fb: FormBuilder, private web: WebService, private router: Router) {
    this.createForm();
  }

  private createForm() {
    this.signinForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.initializeValues();

  }

  private initializeValues() {

    this.web.getData().subscribe((res)=> {
          this.allData = res;
    }, ()=>{}, ()=>{ console.log('complete')});
  }

  onSubmit() {

    let x = false;
    for (let x in this.allData) {
      this.registeredUsers.push(this.allData[x]);
    }


    for (let key in this.registeredUsers) {
        if(this.signinForm.value.userName == this.registeredUsers[key].userName  && this.signinForm.value.password == this.registeredUsers[key].password) {
          console.log('welcome');
          this.router.navigate(['welcome']);
          this.registeredUsers = [];
          x = true;
        }
    }

    if (!x) {
      this.displayError = true;
    }
    this.registeredUsers = [];


  }
}
