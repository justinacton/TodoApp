using System.Collections.Generic;
using TodoApp.Models;

namespace TodoApp.Data
{
    public interface  ITodosRepository
    {
        IList<TodoItem> GetAllTodoItems();
        TodoItem GetTodoItemById(int id);
    }
}
