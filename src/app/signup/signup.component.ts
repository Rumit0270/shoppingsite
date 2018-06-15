import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private web: WebService, private router: Router) {
    this.createForm();
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email:['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.web.sendData(this.signupForm.value).subscribe((res)=> {console.log(res)});
    //this.router.navigate(['signin']);

  }

}
