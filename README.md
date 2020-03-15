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
      selector: 'app-root',
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
Create ```persons``` folder in ```app```. Create ```component.ts``` and ```component.html```. Import ```PersonsComponent``` in declarations for ```app.module.ts```.
