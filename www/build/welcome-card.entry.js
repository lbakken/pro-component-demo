import { r as registerInstance, h } from './chunk-91927964.js';

class WelcomeCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("pro-card", null, h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "8" }, h("h2", null, "Welcome to our Intern Project!")), h("pro-col", { size: "4" }, h("h3", null, "Stencil Web Components"))), h("pro-row", null, h("pro-col", { size: "12" }, h("p", null, "For our project, we used stencil web components to create a user interface library and then used that library to create this application! This application checks recent weather events in your area and, based on the weather and whether or not you are a returning customer, will offer you a quote form, a claim form, or redirect you to another insurance provider."))), h("pro-row", null, h("pro-col", { size: "12" }, h("p", null, "To use our app, either enter a city below or allow your web browser to use your location."))))));
    }
    static get style() { return ":host {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n}"; }
}

export { WelcomeCard as welcome_card };
