import { Injectable } from '@angular/core';
import { UserStory } from './models/user-story';
import { BehaviorSubject, Observable } from 'rxjs';
import userStory from './data/User-story';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  private userStoryData: UserStory = userStory;

  private userStory$: BehaviorSubject<UserStory> = new BehaviorSubject(null);
  public userStory: Observable<UserStory>;
  constructor() {
    this.set();
   }


  public getUserStoryObservable(): Observable<UserStory> {
    return this.userStory$.asObservable();
  }

  get() {
    // to return a copy and not the reference
    return this.userStory$.getValue();
  }

  set(): void {
    this.userStory$.next({...this.userStoryData});
  }
}
