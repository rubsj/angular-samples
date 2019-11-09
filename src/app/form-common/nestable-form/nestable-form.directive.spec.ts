import { NestableFormDirective } from 'app/form-common/nestable-form/nestable-form.directive';

describe('NestableFormDirective', () => {
  it('should create an instance', () => {
    const directive = new NestableFormDirective();
    expect(directive).toBeTruthy();
  });
});
