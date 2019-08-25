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

  constructor(private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.userStory$ = this.userStoryService.getUserStoryObservable();
  }

}
