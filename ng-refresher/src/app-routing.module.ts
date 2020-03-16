import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonInputComponent } from './app/person-input/person-input.component';
import { PersonsComponent } from './app/persons/persons.component';
const routes: Routes = [
    { path: '', component: PersonsComponent },
    { path: 'input', component: PersonInputComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)], //attach routes to RouterModule
    exports: [RouterModule]
})
export class AppRoutingModule { }
