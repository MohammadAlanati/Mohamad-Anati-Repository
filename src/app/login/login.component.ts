import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted = false;
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
   get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
  
        email: ['', [Validators.required, Validators.email]],
        password: [ '', [Validators.required, Validators.minLength(6), Validators.maxLength(40) ]],
       
      },
   
    );
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

}
