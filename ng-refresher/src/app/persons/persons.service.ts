import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' }) //make service available in root
export class PersonsService {
    persons: string[] = ['Max', 'Manuel', 'Anna'];
    personsChanged = new Subject<string[]>(); //add persons[] here whenever change happens
    
    addPerson(name: string): void {
      console.log('Passed' + name);
      this.persons.push(name);
      this.personsChanged.next(this.persons);
    }

    removePerson(name: string) {
      this.persons = this.persons.filter(person => {
        return person !== name;
      });
      this.personsChanged.next(this.persons);
    }
}
