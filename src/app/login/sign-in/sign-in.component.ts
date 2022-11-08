import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;

  @Output() actionemiter:EventEmitter<string>=new EventEmitter();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.signInForm=this.fb.group({
    'mobileNumber':['',Validators['required']],
    'password':['',Validators['required']]
   })
  }
  signIn(){
   console.log(this.signInForm.value)
  }
  redirecttosignup(){
   this.actionemiter.emit("signUp")
  }
}
