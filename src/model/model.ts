import { BehaviorSubject } from "rxjs";
import { ToDo } from "./todo";

export interface Model {
    readonly greeting: string
    readonly todos: ToDo[]
}

const initialState: Model = {
    greeting: "hallo",
    todos: []
}

export const store = new BehaviorSubject<Model>(initialState)