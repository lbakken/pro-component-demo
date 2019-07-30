import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-91927964.js';

class QuoteForm {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isCustomer = createEvent(this, "isCustomer", 7);
    }
    onIsCustomer(ans) {
        this.isCustomer.emit({ response: ans });
        this.el.querySelector('pro-modal').dismiss();
    }
    render() {
        return (h("pro-modal", null, h("pro-content", null, h("h1", { class: "header" }, "Are You A Returning Customer?"), h("pro-grid", { class: "header" }, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { onClick: () => this.onIsCustomer(true) }, "YES")), h("pro-col", { size: "6" }, h("pro-button", { onClick: () => this.onIsCustomer(false) }, "NO")))))));
    }
    get el() { return getElement(this); }
    static get style() { return ".small-modal {\n  height: 200px;\n}\n\n.header {\n  padding-top: 115px;\n}"; }
}

export { QuoteForm as prog_cust_question };
