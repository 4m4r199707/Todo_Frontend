import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  message: string;
  //  = [
  //   new Todo(1, "Amar", new Date(), true),
  //   new Todo(1, "Amrutha", new Date(), false),
  //   new Todo(1, "Kamala Kumar", new Date(), true)
  // ];
  constructor(private service: TodoDataService) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retriveAllTodos("amar").subscribe((res) => {
      this.todos = res;
      console.log(res);
    });
  }
  deleteTodo(id) {
    // console.log(`delete todo ${id}`);
    this.service.deleteTodo("amar", id).subscribe((res) => {
      console.log(res);
      this.message = `delete of Todo ${id}succesfull!! `;
      this.refreshTodos();
    });
  }
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public status: boolean
  ) {}
}
