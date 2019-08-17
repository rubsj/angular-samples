import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {NestedFormExample1Component} from './template-form/nested-form-example1/nested-form-example1.component';

const routes: Routes = [
  {path: 'templateExample1', component: NestedFormExample1Component},
  {path: ' ', component: AppComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
