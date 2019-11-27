import {Component, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-text-area-expanded-cva',
  template: `
    <div contenteditable="true" #textArea tabindex="1" (input)="change($event)" role="textarea"></div>`,
  styles: [
      `
      div {
        width: 200px;
        min-height: 50px;
        border: 1px solid lightgray;
      }

      div.disabled {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextAreaExpandedCvaComponent,
      multi: true
    }
  ]
})
export class TextAreaExpandedCvaComponent implements ControlValueAccessor {
  @ViewChild('textArea', {static: true}) textArea;
  onChange: (_: any) => {};
  onTouched: (_: any) => {};

  constructor(private renderer: Renderer2) {
  }

  writeValue(val: any): void {
    const div = this.textArea.nativeElement;
    this.renderer.setProperty(div, 'textContent', val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const div = this.textArea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  change(event) {
    console.log('event', event);
    this.onChange(event.target.textContent);
    this.onTouched(event.target.textContent);
  }

}
