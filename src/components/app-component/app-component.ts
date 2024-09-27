import {html, render} from "lit-html"
import { setModel } from "../view-model"

const template = html`
    <div class="container">
        Loading ...
    </div>
`

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



class AppComponent extends HTMLElement {
    connectedCallback() {
        
        setModel((model) => {
            render(getHTML(model), this)
        })
        render(template, this)
    }
}

customElements.define("app-component", AppComponent)



function todoTable(rowViewModel: TableViewModel) {
    return html`
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>${rowViewModel.header}</th>
            </tr>
            </thead>
            <tbody>
            ${rowViewModel.rows.map(row => html`
                <tr>
                    <td>${row.id}</td>
                    <td>${row.text}</td>
                </tr>
            `)}
            </tbody>
        </table>
    `
}

function getHTML(model: AllDetailTableViewModel) {
    return html`
        <div style="display: flex">
            <div style="width: 45vw">
               ${userTodoTables(model)} 
            </div>
            <div style="width: 10vw"></div>
            <div style="width: 45vw">
                ${todoTable(model.allTodos)}
            </div>
        </div>
    `
}

function userTodoTables(userTodTableViewModel: AllDetailTableViewModel) {
    return html`
        <div>
            ${userTodTableViewModel.tables.map(todoTable)}
        </div>
    `
}
