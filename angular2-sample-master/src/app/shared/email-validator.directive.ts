import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function validateEmailFactory(/* emailBlackList: EmailBlackList*/) {
  return (c: FormControl) => {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  };
}
//http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
//http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
@Directive({
  selector: '[validateEmail][ngModel], [validateEmail][formControl], [validateEmail][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective {

  validator: Function;

  constructor(/*emailBlackList: EmailBlackList*/) {
    this.validator = validateEmailFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
