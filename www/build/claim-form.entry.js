import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-91927964.js';

class ClaimForm {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.submitButton = true;
        this.closeClaim = createEvent(this, "closeClaim", 7);
    }
    handleSubmit(ev) {
        ev.preventDefault();
        this.closeClaim.emit();
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
        return (h("pro-modal", null, h("pro-content", null, h("h1", null, "File a Claim"), h("form", { onSubmit: (ev) => this.handleSubmit(ev) }, h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "firstName", regex: /^([^0-9]*)$/, label: "First Name", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "lastName", regex: /^([^0-9]*)$/, label: "Last Name", required: true }))), h("pro-row", null, h("pro-col", { size: "7" }, h("pro-input", { placeholder: "Email", regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, label: "Email", required: true })), h("pro-col", { size: "5" }, h("pro-input", { placeholder: "Policy Number", regex: /^[0-9]{10}$/, label: "Policy Number", required: true }))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Address 1", label: "Address 1", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Address 2", label: "Address 2" }))), h("pro-row", null, h("pro-col", { size: "4" }, h("pro-input", { placeholder: "City", label: "City", required: true })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "State", label: "State", regex: /^[A-Z]{2}$/, required: true })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Zip", label: "Zip", regex: /^[0-9]{5}$/, required: true }))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Date", label: "Date of Incident", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Time", label: "Time of Incident", required: true }))), h("pro-row", null, h("pro-col", { size: "12", id: "quote-button" }, h("pro-button", { type: "submit", disabled: this.submitButton, class: 'lower' }, "Submit"))))))));
    }
    get el() { return getElement(this); }
    static get style() { return ".lower {\n  padding-top: 10px;\n}\n#quote-button {\n    margin-top: 20px;\n}"; }
}

export { ClaimForm as claim_form };
