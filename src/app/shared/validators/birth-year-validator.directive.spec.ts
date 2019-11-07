import { BirthYearValidatorDirective } from 'app/shared/validators/birth-year-validator.directive';

describe('BirthYearValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new BirthYearValidatorDirective();
    expect(directive).toBeTruthy();
  });
});
