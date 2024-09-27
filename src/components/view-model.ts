
import {Model, store} from "../model/model"
import {ToDo} from "../model/todo";
import {map} from "rxjs";

export interface RowViewModel {
    id: number
    text: string
}

export interface TableViewModel {
    header: string
    rows: RowViewModel[]
}

export interface AllDetailTableViewModel {
    allTodos: TableViewModel
    tables: TableViewModel[]
}

export function toToDoModel(toDo: ToDo) {
    return {
        id: toDo.id,
        text: toDo.title
    }
}

export function toUserTodoTables(model: Model): AllDetailTableViewModel {
    return {
        allTodos: {
            header: "All Todos",
            rows: model.todos.map(toToDoModel)},
        tables: model.users.map(user => ({
            header: user.username,
            rows: model.todos.filter(todo => todo.userId === user.id).slice(0,4).map(toToDoModel)
        }))
    }
}

export function setModel(renderFn: (item: any) => void){
    store
        .pipe(map(toUserTodoTables))
        .subscribe(model => {
            
            renderFn(model)
        })
}