import {inject} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";

@inject(HttpClient, json)
export class Todos {
    todoItems: Array<ITodoItem>;
    dueDateTodoItem: Date;
    nameTodoItem: string;

    constructor(private http: HttpCLient) { }

    activate() {
        this.fetchAllTodoItems();
    }

    addNewTodoItem() {
        const newTodoItem = {
            DueDate: this.dueDateTodoItem,
            Name: this.nameTodoItem
        };
        this.http.fetch("http://localhost:60384/api/todos/", {
            method: "post",
            body: json(newTodoItem)

        }).then(response => {
            this.fetchAllTodoItems();
            console.log("todo item added: ", response);
        });
    }

    fetchAllTodoItems() {
        return this.http.fetch("http://localhost:60384/api/todos").
            then(response => response.json()).then(data => {
                this.todoItems = data;
            });
    }
}

export interface ITodoItem {
    id: number;
    name: string;
    isCompleted: boolean;
    createdAt: Date;
    dueDate: Date;
}