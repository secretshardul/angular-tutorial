import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) //make service available in root
export class PersonsService {
    persons: string[] = ['Max', 'Manuel', 'Anna'];
    
    onPersonCreated(name: string): void {
      console.log('Passed' + name);
      this.persons.push(name);
    }
}