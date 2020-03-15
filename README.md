# Setup
```shell script
ng new ng-refresher #no routing, select CSS style
cd ng-refresher
ng serve
ng build #production build
```

# File structure
- ```angular.json```: Used by angular-cli.
- ```src/main.ts```: Entry point into app.
    ```ts
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
    ```
  Bootstraps the app module.
- ```src/app/app.module.ts```: Imports components and modules into an angular project.
    ```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    
    import { AppComponent } from './app.component';
    @NgModule({ //decorator to initialize exported AppModule
      declarations: [ //components to be used
        AppComponent
      ],
      imports: [ //modules to be imported
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent] //AppComponent launched on bootstrap
    })
    export class AppModule { }
    ```
  1. **Modules**: Add new functionality to angular apps.
  2. **Components**: Reusable parts of angular.

- **AppComponent** (```src/app/app.component.ts```)
    ```ts
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-root', //by convention selectors names begin with 'app-'
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'ng-refresher';
    }
    ```
    1. **selector**: HTML tag through which this component will be called, i.e. ```<app-root>```. This is used in ```index.html```.
    2. **templateUrl**: HTML to be rendered by component.
    3. **styleUrls**: Stylesheets for styling. Styles are scoped for each component.

# Creating components
```
import { Component } from '@angular/core';
```
Create ```persons``` folder in ```app```. Create ```component.ts``` and ```component.html```. Import ```PersonsComponent``` in declarations for ```app.module.ts```. Now PersonComponent's selector can be used in AppCompoent's template.

app.component.html
```html
<app-persons></app-persons>
```

# Cross component communication
We want to use persons array from ```AppComponent``` in ```PersonsComponent```.
```ts
export class AppComponent {
  persons: string[] = ['Max', 'Manuel', 'Anna'];
}
```

1. Create ```personsList``` variable in PersonsComponent. Attach ```@input``` decorator to this variable. This allows it to accept values from other components.
```ts
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent {
    @Input() personList: string[];
}
```

2. **Property binding**: In AppComponent's template, bind ```persons[]``` to ```personList[]``` using the following syntax:
```html
<app-persons [personList]="persons"></app-persons>
```

3. **String interpolation**: It is a special syntax using double curly braces to insert dynamic data into templates.
```html
<p>{{ personList }}</p>
```

4. **'ngLoop' directive**: Used to loop through list elements in angular templates. This directive becomes accessable by importing ```BrowserModule```in AppModule.
```html
<ul>
    <li *ngFor="let person of personList">{{ person }}</li>
</ul>
```