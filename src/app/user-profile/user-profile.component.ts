import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  isShowDiv = false;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon", "Baby One more Time"];

}
