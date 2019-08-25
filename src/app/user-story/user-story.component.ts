import { Component, OnInit } from '@angular/core';
import { UserStoryService } from '../user-story.service';
import { UserStory } from '../models/user-story';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.scss']
})
export class UserStoryComponent implements OnInit {

  public userStory$: Observable<UserStory>;
  newReq: string;

  constructor(private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.userStory$ = this.userStoryService.getUserStoryObservable();
  }

  public deleteRequirement(id: number): void {
    this.userStoryService.deleteRequirementById(id);
  }

  createNew() {
    console.log(this.newReq.trim());
    this.userStoryService.createReq(this.newReq.trim());
  }

}
