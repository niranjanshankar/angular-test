import { Component, OnInit, Input } from '@angular/core';
import { RouteOrder } from '../models/route-order';

@Component({
  selector: 'app-nav-pill',
  templateUrl: './nav-pill.component.html',
  styleUrls: ['./nav-pill.component.scss']
})
export class NavPillComponent implements OnInit {

  @Input() route: RouteOrder;

  constructor() { }

  ngOnInit() {
  }

}
