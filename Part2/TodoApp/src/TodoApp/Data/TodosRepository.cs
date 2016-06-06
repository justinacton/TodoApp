using System;
using System.Collections.Generic;
using TodoApp.Data;
using TodoApp.Models;

namespace TodoApp.Data
{
    public class TodosRepository : ITodosRepository
    {
        private List<TodoItem> todoItems = new List<TodoItem>()
        {
            new TodoItem
            {   Id = 1,
                Name = "Learn Aurelia",
                CreatedAt =  new DateTime(2015, 12, 04),
                DueDate = new DateTime(2016, 12, 01),
            },
            new TodoItem
            {   Id = 2,
                Name = "Write Aurelia App",
                CreatedAt =  new DateTime(2015, 12, 04),
                DueDate = new DateTime(2016, 08, 31),
            }
            ,
            new TodoItem
            {   Id = 3,
                Name = "Sell Aurelia App",
                CreatedAt =  new DateTime(2015, 12, 04),
                DueDate = new DateTime(2016,10, 15),
            }
        };

        public IList<TodoItem> GetAllTodoItems()
        {
            return todoItems;
        }

        public TodoItem GetTodoItemById(int id)
        {
            return todoItems.Find(todoItem => todoItem.Id == id);
        }
    }
}
