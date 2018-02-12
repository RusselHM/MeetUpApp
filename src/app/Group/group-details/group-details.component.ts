import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { ReactiveFormBase } from '../../base/reactiveFormBase';
import { IReactiveForm } from '../../base/iReactiveForm';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent extends ReactiveFormBase implements IReactiveForm, OnInit {

  constructor(private _formBuilder: FormBuilder) {
    super();
   }

  ngOnInit() {
    this.buildForm();

  }
  public buildForm(): void {
    this.formErrors = {
      'group' : ''
    },

    this.validationMessages = {

      'group': {'required': 'please chose a group'}

    },

    this.reactiveForm = this._formBuilder.group({
      'group':[{value: '' ,disabled:false}, Validators.required]
    });

  }

}
