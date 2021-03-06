import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavPillComponent } from './nav-pill/nav-pill.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavPillComponent,
    UserStoryComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
