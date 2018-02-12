import { FormGroup } from '@angular/forms';
import { ComponentBase } from './componentBase';


export abstract class FormBase extends ComponentBase {
    public formErrors: any = {};
    public formBusy: any = {};
    public validationMessages: any = {};

    protected onValueChangedBase(form: FormGroup, data?: any): void {
        if (!form) {
            return;
        }

        if (this.formErrors) {
            if (Object.keys(this.formErrors).length === 0) {
                console.warn('No FormErrors specified for form');
                return;
            }
            for (const field of Object.keys(this.formErrors)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                

                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];

                    if (!messages) {
                        console.warn('No message for field ' + field);
                    }

                    if (control && control.errors) {
                        for (const key of Object.keys(control.errors)) {

                            let message = 'Invalid Control';
                            if (messages && messages[key]) {
                                message = messages[key];
                            } else if (control.errors[key]) {
                                const result = control.errors[key];
                                if (result && result.message) {
                                    message = result.message;
                                }
                            }
                            this.formErrors[field] += message + ' ';
                        }

                        if (this.formErrors[field]) {
                            console.log(this.formErrors[field]);
                        }
                    }
                }
            }
        }
    }

}
