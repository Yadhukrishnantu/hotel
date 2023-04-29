import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="your perfect banking patner"
  iclass="form-control"


 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }


  //model form

  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })
  
  ngOnInit(): void {
    
  }

  login(){
    var uname=this.loginForm.value.uname
    var psw=this.loginForm.value.psw
   
    if(this.loginForm.valid){
     this.ds.login(uname,psw).subscribe((result:any)=>{

      localStorage.setItem("currentUser",JSON.stringify(result.currentuser))
      localStorage.setItem("currentEmail",JSON.stringify(result.currentEm))
      // localStorage.setItem("token",JSON.stringify(result.token))


      alert(result.message)
      this.router.navigateByUrl('home')
    },
    result=> {
      alert(result.error.message)
    })
    
  }
  else{
    alert('invalid form')
  }
  }

  

}


