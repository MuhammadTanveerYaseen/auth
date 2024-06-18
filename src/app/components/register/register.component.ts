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
register!:FormGroup;  
ngOnInit(): void {
this.register =  this.fb.group({
  FirstName:["", Validators.required],
  LastName:["", Validators.required],
  UserName :["", Validators.required],
  Email:["", Validators.compose([Validators.email ,Validators.required])],
  Password:["", Validators.required],
  ConfirmPassword:["", Validators.required],
}
)
}

Register(){
  console.log(this.register.value)
}
}
