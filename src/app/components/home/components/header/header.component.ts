import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  eventtype:string="signIn";

  constructor() { }

  ngOnInit(): void {
  }
  
  // emitActionSign(action:any){
  //   if(action == 'login-success'){
  //     this.loginSuccess();
  //   }else {
  //     this.eventtype = action ;
  //   }
  // }
  signUpComplete(action:any){
   this.eventtype=action;
  }
  signUpAction(flag:boolean){
    if(flag){
      this.eventtype = 'signIn';
    }
  }
}
