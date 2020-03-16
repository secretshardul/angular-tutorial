import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-person-input",
    templateUrl: "./person-input.component.html",
    styleUrls: ["./person-input.component.css"]
})
export class PersonInputComponent {
    @Output() personCreate = new EventEmitter<string>();
    enteredPersonName: string = '';

    onCreateUser() {
        console.log(this.enteredPersonName);
        this.personCreate.emit(this.enteredPersonName); //fires off event
        this.enteredPersonName = '';
    }
}