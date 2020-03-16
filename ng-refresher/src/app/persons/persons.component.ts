import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit{
    personList: string[];
    //Angular convention: Intercept service using constructor but use value using lifecycle hook
    //Bad practice to use value from constructor
    constructor (private mPersonsService: PersonsService) {} //mPersonsService gets saved as class attribute
    ngOnInit() {
        this.personList = this.mPersonsService.persons;
    }
}