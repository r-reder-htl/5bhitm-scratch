class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("App component connected")
    }
}
customElements.define("app-component", AppComponent)
