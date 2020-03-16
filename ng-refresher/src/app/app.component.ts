import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: string[] = ['Max', 'Manuel', 'Anna'];
  onPersonCreated(name: string): void {
    console.log('Passed' + name);
    this.persons.push(name);
  }
}
