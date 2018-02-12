
import { Component, Input, OnInit } from '@angular/core';
import { IGroups } from '../../models/groups.interface';



@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  public group: IGroups;
  @Input() public groupServiceDetails: any;

  constructor() { }

  ngOnInit() {
    
  }

  public edit(): void {
    
  }
}
