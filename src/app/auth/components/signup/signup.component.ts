import { Component } from '@angular/core';
import { FormControl, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import{NzSpinModule} from 'ng-zorro-antd/spin';
import{NzFormModule} from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NzSpinModule, NzFormModule, NzButtonModule, NzInputModule, NzLayoutModule, NzMenuModule, NzGridModule, NzIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  isSpinning:boolean = false; 
  signupForm: any;

  constructor(private fb: FormBuilder){
  }
  ngOnInit()  {
    this.signupForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required,this.confirmationValidate]],
      username: [null, Validators.required]
    });
  }
  confirmationValidate = (control: FormControl): { [s: string]: boolean } =>{
    if (!control.value) {
    return { required: true };
    } else if (control.value !== this.signupForm.controls['password'].value) {
    return { confirm: true, error: true };
    }
    return {};
    };
  register(){
    console.log(this.signupForm.value)
  }
}
 