import { FormGroup } from '@angular/forms';

export interface IReactiveForm {
    formErrors: any;
    validationMessages: any;
    reactiveForm: FormGroup;

    buildForm(): void;
}
