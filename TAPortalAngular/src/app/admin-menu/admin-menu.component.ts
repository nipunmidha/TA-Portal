import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => this.pressMenu(params))
  }
  pressedButton
  pressMenu(params) {
    this.pressedButton = params.type;
  }
  ngOnInit() {
  }

}
