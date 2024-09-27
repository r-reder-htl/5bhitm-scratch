import { produce } from "immer"
import { Model, store } from "../model/model"
import { ToDo } from "../model/todo"
import { timer } from "rxjs"

const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export async function loadAllToDos() {
    setTimeout(() => {
        console.log("Long time")
        load()
    }, 3000)
    
}

async function load(){

    const response = await fetch(BASEURL)
    const todos: ToDo[] = await response.json()

    const next = produce(store.getValue(), model => {
        model.todos = todos
    })
    store.next(next)
}