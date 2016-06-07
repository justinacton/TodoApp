System.register(["aurelia-framework", "aurelia-fetch-client", "fetch"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, aurelia_fetch_client_1;
    var Todos;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (_1) {}],
        execute: function() {
            Todos = (function () {
                function Todos(http) {
                    this.http = http;
                }
                Todos.prototype.activate = function () {
                    this.fetchAllTodoItems();
                };
                Todos.prototype.addNewTodoItem = function () {
                    var _this = this;
                    var newTodoItem = {
                        DueDate: this.dueDateTodoItem,
                        Name: this.nameTodoItem
                    };
                    this.http.fetch("http://localhost:60384/api/todos/", {
                        method: "post",
                        body: aurelia_fetch_client_1.json(newTodoItem)
                    }).then(function (response) {
                        _this.fetchAllTodoItems();
                        console.log("todo item added: ", response);
                    });
                };
                Todos.prototype.fetchAllTodoItems = function () {
                    var _this = this;
                    return this.http.fetch("http://localhost:60384/api/todos").
                        then(function (response) { return response.json(); }).then(function (data) {
                        _this.todoItems = data;
                    });
                };
                Todos = __decorate([
                    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient, aurelia_fetch_client_1.json), 
                    __metadata('design:paramtypes', [Object])
                ], Todos);
                return Todos;
            }());
            exports_1("Todos", Todos);
        }
    }
});
