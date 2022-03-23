import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private authservice: AuthService) { }

  LoginForm={} as FormGroup;

  ngOnInit(): void {

    this.LoginForm = this.fb.group({
      userName: ['',Validators.email],
      password: ['',Validators.required],
    });
  }

  onSubmit(){

  }

}
