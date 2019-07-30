import { r as registerInstance, d as createEvent, h } from './chunk-91927964.js';

class OopsModal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeOops = createEvent(this, "closeOops", 7);
    }
    render() {
        return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Well this is strange. . ."), h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "12" }, h("p", { class: "head" }, "We couldn't find that city."))), h("pro-row", null, h("pro-col", { size: "12" }, h("p", { class: "content" }, "Don't worry, let's try again!"), h("pro-button", { onClick: () => this.closeOops.emit() }, "Try Again!")))))));
    }
    static get style() { return "h2 {\n  text-align: center;\n}\n\np.head {\n  font-size: 15px;\n  text-align: center;\n  margin-top: 50px;\n}\n\np.content {\n  font-size: 12px;\n  text-align: center;\n  margin-top: 50px;\n}"; }
}

export { OopsModal as oops_modal };
