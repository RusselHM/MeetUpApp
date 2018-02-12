import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Api} from '../common/constants/Api';
import {ICategory} from '../models/category.interface';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';



@Injectable()
export class CategoriesService {
  private http: Http;
  private _url = Api.CATEGORIES_GET;

  constructor() { }

  public getCategories() {
    return this.http.get(this._url).map((res: Response) => res.json());
  }


}
