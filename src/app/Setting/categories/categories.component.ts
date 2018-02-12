import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormBase } from '../../base/reactiveFormBase';
import { IReactiveForm } from '../../base/iReactiveForm';
import { ICategory } from '../../models/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends ReactiveFormBase  implements IReactiveForm , OnInit {
  meetCategoryForm: FormGroup;
  post: any;
  public Categories: ICategory[];

  constructor(private _categoriesService: CategoriesService, private _formBuilder: FormBuilder ) {
    super();
   }

  ngOnInit() {
    this.buildForm();
    this.getCategories();
  }
  public buildForm(): void {
    this.formErrors = {
      'category' : ''
    },

    this.validationMessages = {

      'category': {'required': 'please chose a category'}

    },

    this.reactiveForm = this._formBuilder.group({
      'category':[{value: '' ,disabled:false}, Validators.required]
    });

  }
  private getCategories(): void {
    let categoryServices$ = this._categoriesService.getCategories();

    if (categoryServices$) {
      categoryServices$.subscribe((categories : ICategory[]) => {
        this.Categories = categories;
        console.log(this.Categories)
      },
        (error) => {
          console.log(error);
        });
    }
  }

}
