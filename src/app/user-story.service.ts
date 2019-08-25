import { Injectable } from '@angular/core';
import { UserStory } from './models/user-story';
import { BehaviorSubject } from 'rxjs';
import userStory from './data/User-story';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  private userStoryData: UserStory = userStory;

  public userStory$: BehaviorSubject<UserStory> = new BehaviorSubject(null);
  constructor() {
    this.set();
   }

  get() {
    // to return a copy and not the reference
    return this.userStory$.getValue();
  }

  set(): void {
    this.userStory$.next({...this.userStoryData});
  }
}
