System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                h = module.h;
                getElement = module.c;
            }],
        execute: function () {
            var QuoteForm = /** @class */ (function () {
                function QuoteForm(hostRef) {
                    registerInstance(this, hostRef);
                    this.submitButton = true;
                    this.closeQuote = createEvent(this, "closeQuote", 7);
                }
                QuoteForm.prototype.handleSubmit = function (ev) {
                    ev.preventDefault();
                    this.closeQuote.emit();
                };
                QuoteForm.prototype.componentDidLoad = function () {
                    this.valid = this.el.querySelectorAll('pro-input');
                    this.isValid = new Array(this.valid.length);
                    for (var i = 0; i < this.valid.length; i++) {
                        this.isValid[i] = !this.valid.item(i).required;
                    }
                };
                QuoteForm.prototype.validate = function () {
                    var valid = true;
                    this.isValid.forEach(function (isVal) {
                        valid = valid && isVal;
                    });
                    this.submitButton = !valid;
                    return valid;
                };
                QuoteForm.prototype.onInputChange = function (ev) {
                    for (var i = 0; i < this.valid.length; i++) {
                        if (this.valid.item(i).shadowRoot.querySelector('input').name == ev.detail.name) {
                            this.isValid[i] = ev.detail.valid;
                        }
                    }
                    this.validate();
                };
                QuoteForm.prototype.render = function () {
                    var _this = this;
                    return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Get a Quote"), h("form", { onSubmit: function (ev) { return _this.handleSubmit(ev); } }, h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "firstName", regex: /^([^0-9]*)$/, label: "First Name", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "lastName", regex: /^([^0-9]*)$/, label: "Last Name", required: true }))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-input", { placeholder: "email", regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, label: "Email", required: true }))), h("pro-row", null, h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Car", regex: /^([^0-9]*)$/, label: "Car", required: true })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Make", regex: /^([^0-9]*)$/, label: "Make", required: true })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Model", label: "Model", required: true }))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Year", regex: /^[0-9]{4}$/, label: "Year", required: true })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Age", regex: /^([0-9]+)$/, label: "Age", required: true }))), h("pro-row", null, h("pro-col", { size: "12", id: "quote-button" }, h("pro-button", { type: "submit", disabled: this.submitButton }, "Submit"))))))));
                };
                Object.defineProperty(QuoteForm.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(QuoteForm, "style", {
                    get: function () { return "#quote-button {\n    margin-top: 20px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return QuoteForm;
            }());
            exports('quote_form', QuoteForm);
        }
    };
});
