import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Profile} from '../profile';
import {ProfileService} from '../profile.service';

const defaultProfile: Profile = {
  name: 'user',
  favLocation: 'Boston',
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  profileJson: string;

  constructor(private cookieService: CookieService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileJson = this.cookieService.get('profile');
    if (!this.profileJson) {
      this.profile = defaultProfile;
    } else {
      this.profile = JSON.parse(this.profileJson);
    }
  }

  save(): void {
    this.profileService.updateProfile(this.profile);
  }

}
