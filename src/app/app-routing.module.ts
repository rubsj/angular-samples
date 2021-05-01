import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {NestedFormExample1Component} from './template-form/nested-form-example1/nested-form-example1.component';
import {MenuComponent} from './menu/menu.component';
import {ReactiveCustomValidationComponent} from 'app/reactive-form/custom-validation/custom-validation.component';
import {TemplateCustomValidationComponent} from 'app/template-form/custom-validation/custom-validation.component';
import {HttpConceptsComponent} from 'app/http-concepts/http-concepts.component';
import {SimpleFormExample1Component} from 'app/template-form/simple-form-example1/simple-form-example1.component';
import {RxSimpleFormExample1Component} from 'app/reactive-form/simple-form-example1/rx-simple-form-example1.component';
import {NestableFormComponent} from 'app/form-common/nestable-form/nestable-form.component';
import {RxSimpleFormExample2Component} from 'app/reactive-form/rx-simple-form-example2/rx-simple-form-example2.component';
import {ChangeDetectionTodoComponent} from 'app/misc-concept/change-detection/todo/change-detection-todo.component';
import {NewsLetterHome1Component} from 'app/misc-concept/change-detection/news-letter/default-strategy/news-letter-home1.component';
import {NewsLetterHome2Component} from 'app/misc-concept/change-detection/news-letter/on-push2/news-letter-home2.component';
import {NewsLetterHome3Component} from 'app/misc-concept/change-detection/news-letter/on-push3/news-letter-home3.component';
import {NewsLetterHome4Component} from 'app/misc-concept/change-detection/news-letter/on-push4/news-letter-home4.component';
import {NewsLetterHome5Component} from 'app/misc-concept/change-detection/news-letter/on-push5/news-letter-home5.component';
import {NewsLetterHome6Component} from 'app/misc-concept/change-detection/news-letter/on-push6/news-letter-home6.component';
import {TimeComponent} from 'app/misc-concept/change-detection/time/time.component';
import {ChildRootParentComponent} from 'app/misc-concept/change-detection/child-hierarchy/child-root-parent.component';
import {JquerySliderUsageComponent} from 'app/misc-concept/cva/ngx-jquery-slider/jquery-slider-usage.component';
import {PersonComponent} from 'app/misc-concept/cva/person/person.component';
import {TextAreaExpandableComponent} from 'app/misc-concept/cva/text-area-expandable/text-area-expandable.component';
import {NgTemplateExampleComponent} from 'app/misc-concept/templates/ng-template-example/ng-template-example.component';
import {NgContentExampleComponent} from 'app/misc-concept/templates/ng-content-example/ng-content-example.component';
import {NgContentAdvancedComponent} from 'app/misc-concept/templates/ng-content-advanced/ng-content-advanced.component';

const routes: Routes = [
  {path : 'nestableFormDirectiveExample', component : NestableFormComponent},
  {path: 'simpleForm1', component: SimpleFormExample1Component},
  {path: 'rxSimpleForm1', component: RxSimpleFormExample1Component},
  {path: 'rxSimpleForm2', component: RxSimpleFormExample2Component},
  {path: 'templateExample1', component: NestedFormExample1Component},
  {path: 'templateCustomVal', component: TemplateCustomValidationComponent},
  {path: 'reactiveCustomVal', component: ReactiveCustomValidationComponent},
  {path: 'httpFirebaseSample', component: HttpConceptsComponent},
  {path: 'changeDetectionHierarchy' , component : ChildRootParentComponent},
  {path: 'changeDetectionTime', component: TimeComponent},
  {path : 'changeDetectionTodo', component: ChangeDetectionTodoComponent},
  {path : 'changeDetectionNewsLetter1' , component: NewsLetterHome1Component},
  {path : 'changeDetectionNewsLetter2' , component: NewsLetterHome2Component},
  {path : 'changeDetectionNewsLetter3' , component: NewsLetterHome3Component},
  {path : 'changeDetectionNewsLetter4' , component: NewsLetterHome4Component},
  {path : 'changeDetectionNewsLetter5' , component: NewsLetterHome5Component},
  {path : 'changeDetectionNewsLetter6' , component: NewsLetterHome6Component},
  {path : 'jquerySliderUsage', component : JquerySliderUsageComponent},
  {path: 'personCVA', component: PersonComponent},
  {path: 'textAreaCVA', component: TextAreaExpandableComponent},
  {path: 'ngTemplateSample1', component: NgTemplateExampleComponent},
  {path: 'ngContentSample1', component: NgContentExampleComponent},
  {path: 'ngContentSample2', component: NgContentAdvancedComponent},
  {path: 'menu', component: MenuComponent},
  {path: ' ', component: AppComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
