import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  usernameErr: string;
  passwordErr: string;
  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.usernameErr = '';
    this.passwordErr = '';
    this.loading = false;
  }

  handleChange(e) {
    if(e.target.id === 'username') {
      this.usernameErr = '';
    }

    if(e.target.id === 'password') {
      this.passwordErr = '';
    }
  }

  login(e) {
    e.preventDefault();
    let valid = true;
    console.log(this.username, this.password);
    if(this.username === '') {
      this.usernameErr = 'Username can not be blank.';
      valid = false;
    }

    if(this.password === '') {
      this.passwordErr = 'Password can not be blank.';
      valid = false;
    }

    if(valid) {
      //Send request to server.
      alert('Login Successful!');
    }
  }
}
