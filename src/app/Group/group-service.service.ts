import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs';//Considered bad practice but had no other choice
import {Http,Response} from '@angular/http';
import {IGroups} from '../models/groups.interface';
import {Api} from '../common/constants/Api';

@Injectable()
export class GroupServiceService {
  public http: Http;
  public _url = Api.GROUPS_GET;

  constructor() { }

    getGroups(): Observable<IGroups[]> {
      return this.http
          .get(this._url).
          map((response:Response) => {
            return <IGroups[]>response.json();
          })
          .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
}


}
