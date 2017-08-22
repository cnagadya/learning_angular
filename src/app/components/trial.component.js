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
var posts_services_1 = require("../services/posts.services");
var TrialComponent = (function () {
    function TrialComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.objectKeys = Object.keys;
        //   runs everytime component is rendered
        console.log('Hello from trial constructor');
        this.name = 'Christine Nagadya';
        this.todo = {
            'Mon': 'SIMS & Skillsets',
            'Thur': 'Checkpoints'
        };
        this.showtasks = true;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
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
        alert("deleted " + Object.keys(this.todo)[i] + " tasks");
        delete this.todo[Object.keys(this.todo)[i]]; //splice if array
    };
    return TrialComponent;
}());
TrialComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'trial',
        templateUrl: 'trial.component.html',
        providers: [posts_services_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_services_1.PostsService])
], TrialComponent);
exports.TrialComponent = TrialComponent;
//# sourceMappingURL=trial.component.js.map