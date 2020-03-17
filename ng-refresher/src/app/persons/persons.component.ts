import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList: string[];
    personListSubscription: Subscription;
    //Angular convention: Intercept service using constructor but use value using lifecycle hook
    //Bad practice to use value from constructor
    constructor (private personsService: PersonsService) {} //mPersonsService gets saved as class attribute
    ngOnInit() {
        this.personList = this.personsService.persons;
        this.personListSubscription = this.personsService.personsChanged.subscribe(persons => {//function executed for every change
            this.personList = persons;
        })
    }
    ngOnDestroy() {
        this.personListSubscription.unsubscribe(); //prevent memory leak
    }
    onRemovePerson(person: string){
        console.log('removing ' + person);
        this.personsService.removePerson(person);
    }
}