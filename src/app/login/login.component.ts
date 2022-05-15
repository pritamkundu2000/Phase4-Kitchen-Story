import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  login=new Login();
  constructor(private route:Router){}
  
  ngonInit():void{}
  save(registerForm:NgForm){
    let uid=this.login.email;
    let pass=this.login.password;
    if(uid=="kmahathi@teksystems.com")
    {
      if(pass=="mahathi123")
      {
        this.route.navigate(['/add']);
      }
      else{
        alert("Admin password incorrect");
      }
    }
    else{
      this.route.navigate(['/sFooditems'])
    }
    console.log(registerForm);
    console.log(JSON.stringify(registerForm.value));
  }
  
 
 }
 