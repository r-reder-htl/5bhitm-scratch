import {produce} from "immer"
import {Model, store} from "../model/model"
import {ToDo} from "../model/todo"
import {User} from "../model/User";

const BASEURL = "https://jsonplaceholder.typicode.com/users"

export async function loadAllUsers() {
    setTimeout(() => {
        console.log("Long time")
        load()
    }, 2000)
    
}

async function load(){
    const response = await fetch(BASEURL)
    const users: User[] = await response.json()

    const next = produce(store.getValue(), model => {
        model.users = users
    })
    store.next(next)
}