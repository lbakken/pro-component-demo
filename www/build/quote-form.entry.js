import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-91927964.js';

class QuoteForm {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.submitButton = true;
        this.closeQuote = createEvent(this, "closeQuote", 7);
    }
    handleSubmit(ev) {
        ev.preventDefault();
        this.closeQuote.emit();
    }
    componentDidLoad() {
        this.valid = this.el.querySelectorAll('pro-input');
        this.isValid = new Array(this.valid.length);
        for (var i = 0; i < this.valid.length; i++) {
            this.isValid[i] = !this.valid.item(i).required;
        }
    }
    validate() {
        var valid = true;
        this.isValid.forEach((isVal) => {
            valid = valid && isVal;
        });
        this.submitButton = !valid;
        return valid;
    }
    onInputChange(ev) {
        for (var i = 0; i < this.valid.length; i++) {
            if (this.valid.item(i).shadowRoot.querySelector('input').name == ev.detail.name) {
                this.isValid[i] = ev.detail.valid;
            }
        }
        this.validate();
    }
    render() {
        return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Get a Quote"), h("form", { onSubmit: (ev) => this.handleSubmit(ev) }, h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "firstName", regex: /^([^0-9]*)$/, label: "First Name", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "lastName", regex: /^([^0-9]*)$/, label: "Last Name", required: true }))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-input", { placeholder: "email", regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, label: "Email", required: true }))), h("pro-row", null, h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Car", regex: /^([^0-9]*)$/, label: "Car", required: true })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Make", regex: /^([^0-9]*)$/, label: "Make", required: true })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Model", label: "Model", required: true }))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Year", regex: /^[0-9]{4}$/, label: "Year", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Age", regex: /^([0-9]+)$/, label: "Age", required: true }))), h("pro-row", null, h("pro-col", { size: "12", id: "quote-button" }, h("pro-button", { type: "submit", disabled: this.submitButton }, "Submit"))))))));
    }
    get el() { return getElement(this); }
    static get style() { return "#quote-button {\n    margin-top: 20px;\n}"; }
}

export { QuoteForm as quote_form };
