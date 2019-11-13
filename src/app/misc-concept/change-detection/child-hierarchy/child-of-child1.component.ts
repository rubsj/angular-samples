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

@Component({
  selector: 'app-child-of-child1',
  template: `<p>The content in Root Child2Component </p>
  <p>The text in Child2Component after button click is : {{text}} </p>
  <button type="button" (click)="updateText()">Trigger Change Detection from child2</button>
  <button type="button" (click)="updateTextWithEmitEvent()">Trigger Change Detection from child2 and emit event to parent</button>
    
  <p>Text received from parent component : {{parentText}}</p>  
  `
})
export class ChildOfChild1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  text = 'child2 init text';
  @Input() parentText: string;
  @Output() emitText = new EventEmitter<string>();


  updateText() {
    console.log('updateText method called in ChildOfChild1Component');
    const dateStr = this.datePipe.transform(Date.now(), 'hh:mm:ss:SSS');
    this.text = `text updated on button click at ${dateStr}`;
  }

  updateTextWithEmitEvent() {
    console.log('updateTextWithEmitEvent method called in ChildOfChild1Component');
    const dateStr = this.datePipe.transform(Date.now(), 'hh:mm:ss:SSS');
    this.text = `text updated on button click at ${dateStr}`;
    this.emitText.emit(this.text);
  }

  constructor(private datePipe: DatePipe) {
    console.log('called in the constructor of ChildOfChild1Component');
  }

  ngOnChanges() {
    console.log('called in the ngOnChanges of ChildOfChild1Component');
  }

  ngOnInit() {
    console.log('called in the ngOnInit of ChildOfChild1Component');
  }

  ngDoCheck() {
    console.log('called in the ngDoCheck of ChildOfChild1Component');

  }

  ngAfterContentInit() {
    console.log('called in the ngAfterContentInit of ChildOfChild1Component');
  }

  ngAfterContentChecked() {
    console.log('called in the ngAfterContentChecked of ChildOfChild1Component');
  }

  ngAfterViewInit() {
    console.log('called in the ngAfterViewInit of ChildOfChild1Component');
  }

  ngAfterViewChecked() {
    console.log('called in the ngAfterViewChecked of ChildOfChild1Component');

  }

  ngOnDestroy() {
    console.log('called in the ngOnDestroy of ChildOfChild1Component');
  }

}
