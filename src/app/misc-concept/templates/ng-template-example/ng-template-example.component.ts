import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  templateUrl: './ng-template-example.component.html',
  styleUrls: ['./ng-template-example.component.css']
})
export class NgTemplateExampleComponent implements OnInit {
  totalEstimate = 10;
  ctx = {estimate: this.totalEstimate , total : 100};
  myContext = {$implicit: 'World', localSk: 'Svet'};

  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];
  @ViewChild('defaultTabButtons' , {static : true})
  private defaultTabButtons: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.defaultTabButtons);
  }

  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }

}
