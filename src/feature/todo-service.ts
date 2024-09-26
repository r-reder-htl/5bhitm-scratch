import { ToDo } from "../model/todo"

const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export async function loadAllToDos() {
    const response = await fetch(BASEURL)
    const todos: ToDo[] = await response.json()
    console.log("todos loaded", todos)
}