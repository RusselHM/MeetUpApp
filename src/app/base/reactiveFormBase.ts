import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from './formBase';

export abstract class ReactiveFormBase extends FormBase {
  public formErrors: any;
  public validationMessages: any;
  public reactiveForm: FormGroup;

  /** temp solution as this is a bug with angular and setting the async validation message 
   * http://stackoverflow.com/questions/39486331/angular-2-reactive-forms-custom-validator-not-setting-error-type
  */

  public onValueChanged(data?: any) {
    if (this.reactiveForm) {
      this.onValueChangedBase(this.reactiveForm, data);
    }
  }

  public onStatusChanged(): void {
    this.onValueChanged();
  }

  public subscribeToValueChanged(): void {
    this.reactiveForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.reactiveForm.statusChanges.subscribe(_ => this.onStatusChanged());
  }
}
