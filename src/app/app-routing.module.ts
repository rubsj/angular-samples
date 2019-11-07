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

const routes: Routes = [
  {path: 'simpleForm1', component: SimpleFormExample1Component},
  {path: 'rxSimpleForm1', component: RxSimpleFormExample1Component},
  {path: 'templateExample1', component: NestedFormExample1Component},
  {path: 'templateCustomVal', component: TemplateCustomValidationComponent},
  {path: 'reactiveCustomVal', component: ReactiveCustomValidationComponent},
  {path: 'httpFirebaseSample', component: HttpConceptsComponent},
  {path: 'menu', component: MenuComponent},
  {path: ' ', component: AppComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
