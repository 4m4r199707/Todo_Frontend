import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, "Amar", new Date(), true),
    new Todo(1, "Amrutha", new Date(), false),
    new Todo(1, "Kamala Kumar", new Date(), true)
  ];
  constructor() {}

  ngOnInit() {}
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public status: boolean
  ) {}
}
