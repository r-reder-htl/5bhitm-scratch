import { html, render } from "lit-html"

const template = html`
<div class="container">
Hello World2
</div>
`

class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("App component connected")
        render(template, this)
    }
}
customElements.define("app-component", AppComponent)
