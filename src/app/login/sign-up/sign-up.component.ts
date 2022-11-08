import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm:any=FormGroup;

  @Output() signUpComplete:EventEmitter<boolean> = new EventEmitter();
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  initializeForm(){
    this.signUpForm = this.fb.group({
      'userName':['',[Validators.required]],
      'mobileNumber':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      'password':['',[Validators.required]],
      'confirmPassword':['',[Validators.required]]
    },)
  }

  signUp(){

  }

  redirectToSignIn(){

  }

}
