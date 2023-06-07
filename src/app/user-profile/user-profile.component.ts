import { Component } from '@angular/core';
import { User } from '../user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user!: User;
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zipcode = new FormControl('');
  city = new FormControl('');
  isDisplayed = false


  createUser() {
    this.user = new User (
    this.username.value as string,
    this.email.value as string,
    this.password.value as string,
    `${this.street.value}, ${this.zipcode.value}, ${this.city.value}`)
    this.isDisplayed =true;
  }
}
