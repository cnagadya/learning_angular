import { Component } from '@angular/core';

@Component({
    selector: 'trial',
    template:
    `
    <b>It is a {{name}} affair </b>
    <p> Tasks to Do</p>
   
    <button (click)="toggleTasks()">{{showtasks ? "Hide" : "Show"  }} Tasks</button> <hr>
    <div *ngIf="showtasks">
        <ul>
            <li *ngFor=" let key of objectKeys(todo);"><b>{{key}}</b>: {{todo[key]}}</li>
        </ul>
    </div>

    `,
})
export class TrialComponent {
    name: string;
    objectKeys = Object.keys;
    todo: todo;
    showtasks: boolean;


    constructor() {
        //   runs everytime component is rendered
        console.log('Hello from trial constructor')
        this.name = 'Christine Nagadya';
        this.todo = {
            'Mon - Wed': 'SIMS & Skillsets',
            'Thur - Fri': 'Checkpoints'
        }
        this.showtasks = true
    }

    toggleTasks() {
        if (this.showtasks == true) {
            this.showtasks = false
        }
        else {
            this.showtasks = true
        }
    }
}

interface todo {
    (Mon - Wed): string
    (Thur - Fri): string
}

//   <li ng-repeat="(key, value) in todo">
            //    {{key}}{{ value }}
            // </li>
            // <li *ngFor=" let key of objectKeys(todo);">{{key}}:{{todo[key]}}</li>