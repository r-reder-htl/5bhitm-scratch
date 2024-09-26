import { html, render } from "lit-html"
import { store } from "../../model/model"

const template = html`
<div class="container">
Hello World2
</div>
`

class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("App component connected")
        store.subscribe(model => {
            console.log(`${model.greeting} todos changed: `, model.todos)
        })
        render(template, this)
    }
}
customElements.define("app-component", AppComponent)
