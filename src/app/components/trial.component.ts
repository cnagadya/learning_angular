import { Component } from '@angular/core';
import { PostsService } from '../services/posts.services';

@Component({
    moduleId: module.id,
    selector: 'trial',
    templateUrl:'trial.component.html',
    providers: [PostsService]
})
export class TrialComponent {
    name: string;
    day: string;
    task: string;
    objectKeys = Object.keys;
    todo: todo;
    showtasks: boolean;
    posts: Posts[];


    constructor(private postsService: PostsService) {
        //   runs everytime component is rendered
        console.log('Hello from trial constructor')
        this.name = 'Christine Nagadya';
        this.todo = {
            'Mon': 'SIMS & Skillsets',
            'Thur': 'Checkpoints'
        };
        this.showtasks = true;
        this.postsService.getPosts().subscribe(posts => {
            this.posts= posts;
        });

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

    deleteTask(i: number) {
        alert("deleted " + Object.keys(this.todo)[i] + " tasks");
        delete this.todo[Object.keys(this.todo)[i]]; //splice if array

    }
}

interface todo {
    Mon: string;
    Thur: string;
}

interface Posts {
    id: number;
    title: string;
    body: string;
}