import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../servies/register.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
loginservies = inject(RegisterService)
fb = inject(FormBuilder);
login!:FormGroup
ngOnInit(): void {
    this.login = this.fb.group({
email:["", Validators.compose([Validators.email,Validators.required])],
password:["" , Validators.required]
    })
}
Login(){
  console.log(this.login.value)
  this.loginservies.Login(this.login.value).subscribe({
    next:(result:any)=>{
alert("login sucess")
    },
    error:(err:any)=>{
      alert("error while login")
    }
  })
}
}
