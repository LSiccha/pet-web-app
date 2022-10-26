import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Profile} from "../models/profile.model";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {
  }

  createProfile(profile: Profile): Observable<Profile> {
    return new Observable<Profile>((subscriber) => {
      setTimeout(() => {
        subscriber.next(profile);
        subscriber.complete();
      }, 1000);
    })
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return new Observable<Profile>((subscriber) => {
      setTimeout(() => {
        subscriber.next(profile);
        subscriber.complete();
      }, 1000);
    })
  }

  getProfile(id: string): Observable<Profile> {
    return new Observable<Profile>((subscriber) => {
      setTimeout(() => {
        let profile = localStorage.getItem('profile');
        if (profile) {
          subscriber.next(JSON.parse(profile));
        }
        else {
          const error = new HttpErrorResponse({ status: 422 });
          subscriber.error(error);
        }
        subscriber.complete();
      }, 1000);
    })
  }
}
