import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgModel} from '@angular/forms';

@Component({
  selector: 'app-text-area-expandable',
  templateUrl: './text-area-expandable.component.html',
  styles: [
      `div.divGroup {
      border: 1px solid blue;
      padding: 10px;
      margin: 5px;
    }`
  ]
})
export class TextAreaExpandableComponent implements OnInit {
  initText = 'default initial text';
  textFromEvent: string;
  cvaFormGroup: FormGroup;
  isDisabled = false;
  isEventDisabled = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.cvaFormGroup = this.formBuilder.group({
      cvaTextArea: [`${this.initText}`],
    });
  }

  disableRxTextArea() {
    const taControl = this.cvaFormGroup.controls.cvaTextArea;
    if (taControl.disabled) {
      taControl.enable();
    } else {
      taControl.disable();
    }
  }

  disableTmpTextArea() {
    this.isDisabled = !this.isDisabled;
  }

  disableTextAreaEvent() {
    this.isEventDisabled = !this.isEventDisabled;
  }

  valFromEventComp(val: string) {
    if (!this.textFromEvent) {
      this.textFromEvent = this.initText;
    }
    this.textFromEvent = val;
  }

}
