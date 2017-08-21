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
            <li *ngFor=" let key of objectKeys(todo); let i = index"><b>{{key}}</b>: {{todo[key]}}
            <button (click)="deleteTask(i)">X</button></li>
        </ul>
    </div>
    <form>
        <p>Let's add more tasks</p>
        <label>Day(s)</label>
        <input type="text" #day/>
        <label>Task</label>
        <input type="text" #task/>
         <button name="todoAdd" 
              (click)="addTask({day: day.value, task: task.value}); day.value=''; task.value='' ">add</button>
    </form>
    `,
})
export class TrialComponent {
    name: string;
    day: string;
    task: string;
    objectKeys = Object.keys;
    todo: todo;
    showtasks: boolean;
 

    constructor() {
        //   runs everytime component is rendered
        console.log('Hello from trial constructor')
        this.name = 'Christine Nagadya';
        this.todo = {
            'Mon': 'SIMS & Skillsets',
            'Thur': 'Checkpoints'
        };
        this.showtasks = true;

    }

    toggleTasks() {
        if (this.showtasks == true) {
            this.showtasks = false
        }
        else {
            this.showtasks = true
        }
    }

    addTask(tasks: any) {
        console.log(tasks.day)
        this.todo[tasks.day] = [tasks.task]; // push if array
    }

    deleteTask(i: number ) {
        console.log("deleted " + Object.keys(this.todo)[i]+ " tasks");
        delete this.todo[Object.keys(this.todo)[i]]; //splice if array
        
    }
}

interface todo {
    Mon: string
    Thur: string
}

interface i{

}
