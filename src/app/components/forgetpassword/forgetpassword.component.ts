import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent implements OnInit {
  fb = inject(FormBuilder)
  forgetform !: FormGroup;
ngOnInit(): void {
    this.forgetform = this.fb.group({
      email:["", Validators.compose([Validators.required , Validators.email])]
    })
}
 Forget(){
  console.log(this.forgetform.value)
 }
}
