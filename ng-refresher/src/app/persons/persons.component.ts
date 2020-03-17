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
    constructor (private personsService: PersonsService) {} //mPersonsService gets saved as class attribute
    ngOnInit() {
        this.personList = this.personsService.persons;
    }
    onRemovePerson(person: string){
        console.log('removing ' + person);
        this.personsService.removePerson(person);
    }
}