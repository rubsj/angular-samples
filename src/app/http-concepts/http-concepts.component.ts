import {Component, OnInit} from '@angular/core';
import {Notes} from 'app/http-concepts/http-model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'rj-http-firebase-sample',
  templateUrl: './http-concepts.component.html',
  styles: []
})
export class HttpConceptsComponent implements OnInit {
  loadedNotes: Notes[];

  ngOnInit(): void {
  }

  OnSubmit(form: NgForm) {
    console.log(form);
  }
}
