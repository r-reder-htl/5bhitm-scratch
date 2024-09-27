import { BehaviorSubject } from "rxjs";
import { ToDo } from "./todo";
import { User } from "./User";

export interface Model {
    readonly greeting: string
    readonly todos: ToDo[]
    readonly users: User[]
}

const initialState: Model = {
    greeting: "hallo",
    todos: [],
    users: []
}

export const store = new BehaviorSubject<Model>(initialState)