import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {NestedFormExample1Component} from './template-form/nested-form-example1/nested-form-example1.component';
import {MenuComponent} from './menu/menu.component';
import {ReactiveCustomValidationComponent} from 'app/reactive-form/custom-validation/custom-validation.component';
import {TemplateCustomValidationComponent} from 'app/template-form/custom-validation/custom-validation.component';

const routes: Routes = [
  {path: 'templateExample1', component: NestedFormExample1Component},
  {path: 'templateCustomVal' , component : ReactiveCustomValidationComponent},
  {path: 'reactiveCustomVal' , component : TemplateCustomValidationComponent},
  {path : 'menu', component: MenuComponent},
  {path: ' ', component: AppComponent, pathMatch: 'full'},
  {path : '**' , redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
