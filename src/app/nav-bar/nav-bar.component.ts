import { Component, OnInit } from '@angular/core';
import { RouteOrder } from '../models/route-order';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // this could essentially come from a service
  public routeOrder: RouteOrder[] = [
    {
      title: 'jackanory',
      // slug is used for routing (so, it avoid empty spaces)
      slug: 'jackanory',
      order: 1
    },
    {
      title: 'user story',
      slug: 'user-story',
      order: 2
    },
    {
      title: 'admin',
      slug: 'admin',
      order: 3
    },
    {
      title: 'security',
      slug: 'security',
      order: 4
    },
    {
      title: 'generator',
      slug: 'genertor',
      order: 5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
