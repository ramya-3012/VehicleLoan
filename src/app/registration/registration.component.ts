import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  gender = ['Default','Male','Female','Others'];
  registerForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('^[a-zA-Z ]*$')]),
    uname : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9!@#$%&]*$")]),
    cpassword : new FormControl('',[Validators.required,compare]),
    age : new FormControl('',[Validators.required,validAge]),
    gender : new FormControl('',[Validators.required]),
    mobile : new FormControl('',[Validators.required,Validators.pattern("[2-9]{2}[0-9]{8}")]),
    tick : new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.registerForm.value);
  }
}

export function validAge(c:AbstractControl):ValidationErrors
{
  let v:number=c.value;
  
  if(v<18)
  {
      return {'gt':true}
  }
  else if(v > 100)
    return {'gt':true}
  return {};
}

export function compare(c:AbstractControl):ValidationErrors
{
  let controlvalue:string=c.value;

  //password
  let comparevalue:string=c.root.get("password")?.value;
  //comparing both
  if(!(controlvalue==comparevalue))
  {
    return {'compare':true}
  }
  return {};

}