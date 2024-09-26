import { Model, store } from "../model/model"
import { ToDo } from "../model/todo"

const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export async function loadAllToDos() {
    const response = await fetch(BASEURL)
    const todos: ToDo[] = await response.json()
    const next: Model = {
        greeting: "was i ned",
        todos
    }
    store.next(next)
}