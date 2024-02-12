import { TodoInterface } from "./TodoInterface"

class TodoClass implements TodoInterface{

    Tasks: string[] = [];

    addTask(task: string): number {
        let length: number = this.Tasks.push(task);
        console.log(task + " has been added to our Task List!");
        return length;
    }

}

let MyTodo = new TodoClass();
MyTodo.addTask("Sleep");

