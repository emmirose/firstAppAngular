import { Component } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user!: User;
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
    street: [''],
    zipcode: [''],
    city: ['']
  })

  createUser() {
    console.log(this.userForm.value);
    this.user = new User (
    this.userForm.get('username')?.value as string,
    this.userForm.get('credentials.email')?.value as string,
    this.userForm.get('credentials.password')?.value as string,
    `${this.userForm.get('street')?.value}, ${this.userForm.get('zipcode')?.value}, ${this.userForm.get('city')?.value}`)
  }
}
