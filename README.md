# AngularSamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Concepts
### General Angular
- we first must import the browser module as it “provides services that are essential to launch and run a browser app.”

### Template Forms
- reference - https://www.toptal.com/angular-js/angular-4-forms-validation
- each input element must have the name attribute to be properly identified within the form.
-When the FormsModule is imported, Angular automatically detects a form HTML element and attaches the NgForm component to that element (by the selector of the NgForm component)
-by adding the `NgModel` directive, all inputs are registered to the `NgForm` component. 
- The two main functionalities offered by NgForm are:
  - Retrieving the values of all registered input controls
  - Retrieving the overall state of all controls
-  To expose the `NgForm`, we can add the following to the `<form>` element:
```
<form #myForm="ngForm">
     ..
   </form>
```
This is possible thanks to the `exportAs` property of the `Component` decorator.
- What if we want to have a sub-group of inputs from a specific context wrapped in a container and separate object in the values JSON -  The way to achieve this is by using the `ngModelGroup` directive.
- Template driven form does not have support for creating arrays like there is no (NgModelArray?). There are two approaches to handling it as a work around see phone numbers for approach one and addresses for approach 2
- The `myForm.control.markAsTouched()` is used to make the form touched so we can display the errors at that moment. **The buttons don’t activate this property when clicked**, only the inputs.
### Reactive Forms

