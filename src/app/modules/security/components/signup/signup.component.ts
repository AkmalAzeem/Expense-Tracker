import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private auth: AngularFireAuth){
    
  }

  /* GoogleAuth() {
    return this.trigger(new GoogleAuthProvider());
  }

   trigger(provider:any): any{
    try{
      return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);    
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
    }catch(error){
      console.log(error);
    }
  }
 */
  signupForm= new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]), 
    password:new FormControl('', [Validators.required])
  });
 
 
  signup(){
    let email = this.signupForm.get('email')?.value;
    let pwd = this.signupForm.get('password')?.value; 

    this.auth.createUserWithEmailAndPassword(email!, pwd!).then(response => {
    console.log(response);
  })
}
}
