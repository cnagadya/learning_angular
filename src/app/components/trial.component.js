"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TrialComponent = (function () {
    function TrialComponent() {
        this.objectKeys = Object.keys;
        //   runs everytime component is rendered
        console.log('Hello from trial constructor');
        this.name = 'Christine Nagadya';
        this.todo = {
            'Mon': 'SIMS & Skillsets',
            'Thur': 'Checkpoints'
        };
        this.showtasks = true;
    }
    TrialComponent.prototype.toggleTasks = function () {
        if (this.showtasks == true) {
            this.showtasks = false;
        }
        else {
            this.showtasks = true;
        }
    };
    TrialComponent.prototype.addTask = function (tasks) {
        console.log(tasks.day);
        this.todo[tasks.day] = [tasks.task]; // push if array
    };
    TrialComponent.prototype.deleteTask = function (i) {
        console.log("deleted " + Object.keys(this.todo)[i] + " tasks");
        delete this.todo[Object.keys(this.todo)[i]]; //splice if array
    };
    return TrialComponent;
}());
TrialComponent = __decorate([
    core_1.Component({
        selector: 'trial',
        template: "\n    <b>It is a {{name}} affair </b>\n    <p> Tasks to Do</p>\n   \n    <button (click)=\"toggleTasks()\">{{showtasks ? \"Hide\" : \"Show\"  }} Tasks</button> <hr>\n    <div *ngIf=\"showtasks\">\n        <ul>\n            <li *ngFor=\" let key of objectKeys(todo); let i = index\"><b>{{key}}</b>: {{todo[key]}}\n            <button (click)=\"deleteTask(i)\">X</button></li>\n        </ul>\n    </div>\n    <form>\n        <p>Let's add more tasks</p>\n        <label>Day(s)</label>\n        <input type=\"text\" #day/>\n        <label>Task</label>\n        <input type=\"text\" #task/>\n         <button name=\"todoAdd\" \n              (click)=\"addTask({day: day.value, task: task.value}); day.value=''; task.value='' \">add</button>\n    </form>\n    ",
    }),
    __metadata("design:paramtypes", [])
], TrialComponent);
exports.TrialComponent = TrialComponent;
//# sourceMappingURL=trial.component.js.map