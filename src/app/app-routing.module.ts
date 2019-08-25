import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserStoryComponent } from './user-story/user-story.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: 'user-story',
    component: UserStoryComponent
  },
  {
    path: 'security',
    component: SecurityComponent
  },
  // default route is user-story for this test.
  // Could be refactored to a home component later.
  {
    path: '**',
    redirectTo: '/user-story',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
