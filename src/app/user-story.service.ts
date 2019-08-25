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
    this.set(this.userStoryData);
  }


  public getUserStoryObservable(): Observable<UserStory> {
    return this.userStory$.asObservable();
  }

  get() {
    // to return a copy and not the reference
    return this.userStory$.getValue();
  }

  set(userStoryData: UserStory): void {
    this.userStoryData = userStoryData;
    this.userStory$.next({ ...this.userStoryData });
  }

  deleteRequirementById(id: number) {
    console.log(id);
    console.log(this.get());
    const userStoryData = { ...this.get() };
    const newList = userStoryData.requirement.filter((item) => {
      return item.id !== id;
    });
    userStoryData.requirement = [...newList];
    this.set({ ...userStoryData });
  }

  createReq(newName: string) {
    this.userStoryData.requirement.push({
      id: Math.max.apply(Math, this.userStoryData.requirement.map(function (item) { return item.id; })) + 1,
      name: newName
    });
    this.set({ ...this.userStoryData });
  }
}
