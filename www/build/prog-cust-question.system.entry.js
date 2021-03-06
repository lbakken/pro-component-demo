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
                    this.isCustomer = createEvent(this, "isCustomer", 7);
                }
                QuoteForm.prototype.onIsCustomer = function (ans) {
                    this.isCustomer.emit({ response: ans });
                    this.el.querySelector('pro-modal').dismiss();
                };
                QuoteForm.prototype.render = function () {
                    var _this = this;
                    return (h("pro-modal", null, h("pro-content", null, h("h1", { class: "header" }, "Are You A Returning Customer?"), h("pro-grid", { class: "header" }, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { onClick: function () { return _this.onIsCustomer(true); } }, "YES")), h("pro-col", { size: "6" }, h("pro-button", { onClick: function () { return _this.onIsCustomer(false); } }, "NO")))))));
                };
                Object.defineProperty(QuoteForm.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(QuoteForm, "style", {
                    get: function () { return ".small-modal {\n  height: 200px;\n}\n\n.header {\n  padding-top: 115px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return QuoteForm;
            }());
            exports('prog_cust_question', QuoteForm);
        }
    };
});
