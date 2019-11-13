import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-child-hierarchy',
  template: `<p>The content in Root ChildRootParentComponent </p>
  <p>The text in ChildRootParentComponent after button click is : {{text}} </p>
  <p>text received from child {{childText}}</p>
  <button type="button" (click)="updateText()">Trigger Change Detection</button>
  <app-child1 [parentText]="text" (emitText)="updateTextFromChild($event)"></app-child1>
  `
})
export class ChildRootParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  text = 'init text';
  childText: string;

  updateTextFromChild(textFromChild: string) {
    console.log('updateTextFromChild method called in ChildRootParentComponent');
    this.childText = textFromChild;
  }

  updateText() {
    console.log('updateText method called in ChildRootParentComponent');
    const dateStr = this.datePipe.transform(Date.now() , 'hh:mm:ss:SSS');
    this.text = `text updated on button click at ${dateStr}`;
  }

  constructor(private datePipe: DatePipe) {
    console.log('called in the constructor of ChildRootParentComponent');
  }

  ngOnChanges() {
    console.log('called in the ngOnChanges of ChildRootParentComponent');
  }

  ngOnInit() {
    console.log('called in the ngOnInit of ChildRootParentComponent');
  }

  ngDoCheck() {
    console.log('called in the ngDoCheck of ChildRootParentComponent');

  }

  ngAfterContentInit() {
    console.log('called in the ngAfterContentInit of ChildRootParentComponent');
  }

  ngAfterContentChecked() {
    console.log('called in the ngAfterContentChecked of ChildRootParentComponent');
  }

  ngAfterViewInit() {
    console.log('called in the ngAfterViewInit of ChildRootParentComponent');
  }

  ngAfterViewChecked() {
    console.log('called in the ngAfterViewChecked of ChildRootParentComponent');
  }

  ngOnDestroy() {
    console.log('called in the ngOnDestroy of ChildRootParentComponent');
  }

}
