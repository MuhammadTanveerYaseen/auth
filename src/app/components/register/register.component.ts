import { RegisterService } from './../../servies/register.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
fb = inject(FormBuilder);
Registerservice = inject(RegisterService)
register!:FormGroup;  
ngOnInit(): void {
 
this.register =  this.fb.group({
  firstName:["", Validators.required],
  lastName:["", Validators.required],
  username :["", Validators.required],
  email:["", Validators.compose([Validators.email ,Validators.required])],
  password:["", Validators.required],
   confirmpassword:["", Validators.required],
}
)
}

Register(){
  console.log(this.register.value)
  const value = this.Registerservice.Register(this.register.value).subscribe(
    (results:any) => {
      console.log(results);
     
    },
    (err:any) => {
      console.log(err);
     
    }
  );
  console.log(value);
  alert("Registered sucessfully")
}
}
