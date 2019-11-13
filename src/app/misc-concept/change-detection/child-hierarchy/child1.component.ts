import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, EventEmitter, Input,
  OnChanges,
  OnDestroy,
  OnInit, Output
} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ChildRootParentComponent} from 'app/misc-concept/change-detection/child-hierarchy/child-root-parent.component';

@Component({
  selector: 'app-child1',
  template: `<p>The content in Root Child1Component </p>
  <p>The text in Child1Component after button click is : {{text}} </p>
  <button type="button" (click)="updateText()">Trigger Change Detection from child1 and send text to its child</button>
  <button type="button" (click)="updateTextWithEmitEvent()">Trigger Change Detection from child1 and emit event to parent</button>

  <p>text received from child {{childText}}</p>
  <p>Text received from parent component : {{parentText}}</p>

  <app-child-of-child1 [parentText]="text" (emitText)="ReceivedFromChild($event)"></app-child-of-child1>
  `
})
export class Child1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  text = 'child init text';
  childText: string;
  @Input() parentText: string;
  @Output() emitText = new EventEmitter<string>();


  updateText() {
    console.log('updateText method called in Child1Component');
    const dateStr = this.datePipe.transform(Date.now(), 'hh:mm:ss:SSS');
    this.text = `text updated on button click at ${dateStr}`;
  }

  ReceivedFromChild(textFromChild: string) {
    console.log('updateTextFromChild method called in Child1Component');
    this.childText = `Received from Child2 : ${textFromChild}`;
    this.emitText.emit(this.childText);
  }
  updateTextWithEmitEvent() {
    console.log('updateTextWithEmitEvent method called in Child1Component');
    const dateStr = this.datePipe.transform(Date.now(), 'hh:mm:ss:SSS');
    this.text = `text updated in child1 on button click at ${dateStr}`;
    this.emitText.emit(this.text);
  }

  constructor(private datePipe: DatePipe , private childRootParentComponent : ChildRootParentComponent) {
    console.log('called in the constructor of Child1Component');
  }

  ngOnChanges() {
    console.log('called in the ngOnChanges of Child1Component');
  }

  ngOnInit() {
    console.log('called in the ngOnInit of Child1Component');
    this.childRootParentComponent.childText = 'came from the child1 \'s ng on init';
  }

  ngDoCheck() {
    console.log('called in the ngDoCheck of Child1Component');
    this.childRootParentComponent.childText = 'came from the child1 \'s ng on ngDoCheck';

  }

  ngAfterContentInit() {
    console.log('called in the ngAfterContentInit of Child1Component');
  }

  ngAfterContentChecked() {
    console.log('called in the ngAfterContentChecked of Child1Component');
  }

  ngAfterViewInit() {
    console.log('called in the ngAfterViewInit of Child1Component');
  }

  ngAfterViewChecked() {
    console.log('called in the ngAfterViewChecked of Child1Component');
  }

  ngOnDestroy() {
    console.log('called in the ngOnDestroy of Child1Component');
  }

}
