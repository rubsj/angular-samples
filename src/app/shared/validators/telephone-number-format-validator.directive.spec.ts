import { TelephoneNumberFormatValidatorDirective } from 'app/shared/validators/telephone-number-format-validator.directive';

describe('TelephoneNumberFormatValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new TelephoneNumberFormatValidatorDirective();
    expect(directive).toBeTruthy();
  });
});
