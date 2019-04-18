import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Profile} from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private cookieService: CookieService) { }

  updateProfile(profile: Profile): void {
    this.cookieService.set( 'profile', JSON.stringify(profile) );
  }
}
