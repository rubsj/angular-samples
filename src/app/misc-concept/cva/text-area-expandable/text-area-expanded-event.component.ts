import {Component, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-text-area-expanded-event',
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
})
export class TextAreaExpandedEventComponent {
  @ViewChild('textArea', {static: true}) textArea;


  @Output() emitVal = new EventEmitter<string>();

  @Input()
  set Value(val: string) {
    const div = this.textArea.nativeElement;
    this.renderer.setProperty(div, 'textContent', val);
  }

  @Input()
  set disabledState(isDisabled: boolean) {
    const div = this.textArea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }


  constructor(private renderer: Renderer2) {
  }

  change(event) {
    console.log('event', event);
    this.emitVal.emit(event.target.textContent);
  }

}
