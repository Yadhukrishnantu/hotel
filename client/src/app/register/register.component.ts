import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {







constructor(private ds:DataService,private router:Router,private fb:FormBuilder){ }

//create reactive form for register form
registerFrom=this.fb.group({
  Email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

register(){
  // alert('register success')

 
  var uname=this.registerFrom.value.uname
  var Email=this.registerFrom.value.Email
  var psw=this.registerFrom.value.psw
  if(this.registerFrom.valid){
  this.ds.register(uname,Email,psw).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl("")
  },
  result=>{
    alert(result.error.message)
    this.router.navigateByUrl("")
  })


//   if(result){
//     alert('registerd')
//     this.router.navigateByUrl("")
    
//   }
//   else{
//     alert('acno already present')
//   }
//   // console.log(uname,acno,pasw);
 }
else{
  alert('invalid form')
}
  }
}

