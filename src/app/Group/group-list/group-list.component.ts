import { Component, OnInit } from '@angular/core';
import {GroupServiceService} from '../group-service.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  public groupServiceList: Array<any>;

  constructor(private _groupService:GroupServiceService) { }

  ngOnInit() {
    this.groupServiceList = [];
  }
  private getGroups(): void {
    const groupServices$ = this._groupService.getGroups();

    if (groupServices$) {
      groupServices$.subscribe(data => {
        this.groupServiceList = data;
      },
        (error) => {
          console.log(error);
        });
    }
  }

}
