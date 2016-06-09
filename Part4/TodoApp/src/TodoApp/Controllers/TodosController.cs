using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TodoApp.Data;
using TodoApp.Models;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        public ITodosRepository Repo { get; set; }

        public TodosController([FromServices] ITodosRepository repo)
        {
            Repo = repo;
        }

        // GET api/todos
        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return Repo.GetAllTodoItems();
        }

        // GET api/todos/2
        [HttpGet("{id}")]
        [Route("{id}", Name = "GetTodoItemByIdRoute")]
        public TodoItem Get(int id)
        {
            return Repo.GetTodoItemById(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody] TodoItem todoItem)
        {
            if (!ModelState.IsValid) return BadRequest();

            try
            {
                var todoItemId = Repo.AddTodoItem(todoItem);
                var url = Url.RouteUrl("GetTodoItemByIdRoute", new {id = todoItemId}, Request.Scheme,
                    Request.Host.ToUriComponent());
                return Created(url, todoItem);

            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}