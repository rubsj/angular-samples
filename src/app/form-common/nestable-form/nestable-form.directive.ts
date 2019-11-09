import {Attribute, Directive, Injector, Input, OnDestroy, OnInit, Optional, SkipSelf} from '@angular/core';
import {AbstractControl, Form, FormArray, FormGroup, NgForm} from '@angular/forms';

const resolvedPromise = Promise.resolve(null);

@Directive({
  selector: '[appNestableForm]'
})
export class NestableFormDirective implements OnInit, OnDestroy {

  private static readonly FORM_ARRAY_NAME = 'CHILD_FORMS';

  private currentForm: FormGroup;
  @Input() private formGroup: FormGroup;

  constructor(@Optional() @SkipSelf() private parentForm: NestableFormDirective,
              private injector: Injector,
              @Attribute('rootNestableForm') private isRoot) {
  }


  ngOnInit(): void {
    if (!this.currentForm) {
      this.executePostponed(() => this.resolveAndRegister());
    }
  }


  ngOnDestroy(): void {
    this.executePostponed(() => this.parentForm.removeControl(this.currentForm));
  }

  private executePostponed(callback: () => void): void {
    resolvedPromise.then(() => callback());
  }

  private resolveCurrentForm(): FormGroup {
    // NOTE: template-driven or model-driven => determined by the formGroup input
    return this.formGroup ? this.formGroup : this.injector.get(NgForm).control;
  }

  private registerToParent(): void {
    if (this.parentForm != null && !this.isRoot) {
      this.parentForm.registerNestedForm(this.currentForm);
    }
  }

  private resolveAndRegister(): void {
    this.currentForm = this.resolveCurrentForm();
    this.currentForm.addControl(NestableFormDirective.FORM_ARRAY_NAME, new FormArray([]));
    this.registerToParent();
  }

  public registerNestedForm(control: AbstractControl): void {
    // NOTE: prevent circular reference (adding to itself)
    if (control === this.currentForm) {
      throw new Error('Trying to add itself! Nestable form can be added only on parent "NgForm" or "FormGroup".');
    }
    (<FormArray> this.currentForm.get(NestableFormDirective.FORM_ARRAY_NAME)).push(control);
  }

  public removeControl(control: AbstractControl): void {
    const array = (<FormArray> this.currentForm.get(NestableFormDirective.FORM_ARRAY_NAME));
    const idx = array.controls.indexOf(control);
    array.removeAt(idx);
  }

}
