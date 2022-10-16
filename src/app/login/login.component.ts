import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userName=""
  password=""

  readValues=()=>{
    let data={
      "userName":this.userName,
      "password":this.password
    }

    console.log(data)
  }
  

  ngOnInit(): void {
  }

}
