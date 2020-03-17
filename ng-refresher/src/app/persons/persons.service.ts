import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' }) //make service available in root
export class PersonsService {
  persons: string[];
  personsChanged = new Subject<string[]>(); //add persons[] here whenever change happens

  constructor(private http: HttpClient) { } //intercept HttpClient service

  fetchPersons() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon') //provides rxjs observable
      .pipe(map(resData => {//map() is rxjs method
        return resData.results.map(pokemon => pokemon.name) //map is array method
      }))
      .subscribe(transformedData => {
        console.log(transformedData);
        this.persons = [...transformedData];
        this.personsChanged.next(this.persons);
      })
  }

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
