import { r as registerInstance, d as createEvent, h } from './chunk-91927964.js';

class ThanksModal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeThanks = createEvent(this, "closeThanks", 7);
    }
    render() {
        return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Thank You for using our app!"), h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "12" }, h("p", { class: "head" }, "If you haven't had enough yet, click here to try another flow!"), h("pro-button", { onClick: () => this.closeThanks.emit() }, "Do It Again!"))), h("pro-row", null, h("pro-col", { size: "12" }, h("h2", null, "Want to learn more?"))), h("pro-row", null, h("pro-col", null, h("p", { class: "content" }, "Checkout the links below explore our more technical references!"))), h("pro-row", null, h("pro-col", { size: "6" }, h("a", { href: "https://stenciljs.com/" }, h("pro-button", null, "StencilJS Docs"))), h("pro-col", { size: "6" }, h("a", { href: "https://docs.google.com/document/d/1XOm4rwpCExhkX0VSr7b3bP8nKClNq-SvAevzkjQlGFU/edit?usp=sharing" }, h("pro-button", null, "Our Docs")))), h("pro-row", null, h("pro-col", { size: "6" }, h("a", { href: "" }, h("pro-button", null, "UI Library Code"))), h("pro-col", { size: "6" }, h("a", { href: "https://www.npmjs.com/package/pro-ui-library" }, h("pro-button", null, "UI Library NPM")))), h("pro-row", null, h("pro-col", { size: "6" }, h("a", { href: "" }, h("pro-button", null, "App Code"))), h("pro-col", { size: "6" }, h("a", { href: "https://heroku.com" }, h("pro-button", null, "Heroku Hosting"))))))));
    }
    static get style() { return "h2 {\n  text-align: center;\n}\n\np.head {\n  font-size: 15px;\n  text-align: center;\n}\n\np.content {\n  font-size: 12px;\n  text-align: center;\n}"; }
}

export { ThanksModal as thanks_modal };
