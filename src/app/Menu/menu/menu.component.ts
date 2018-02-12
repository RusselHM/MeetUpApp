import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ImageConstant} from '../../common/constants/image.constant';
import {MessageConstant} from '../../common/constants/constant.message';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public title = 'Jozi Meet ups';
  public router: Router;
  public mainImageText = ImageConstant.IMAGE_URL;
  public headerText = MessageConstant.HEADER_APP_COMPONENT;
  constructor() { }

  public ngOnInit(): void {

  }
}
