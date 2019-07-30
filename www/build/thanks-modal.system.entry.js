System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                h = module.h;
            }],
        execute: function () {
            var ThanksModal = /** @class */ (function () {
                function ThanksModal(hostRef) {
                    registerInstance(this, hostRef);
                    this.closeThanks = createEvent(this, "closeThanks", 7);
                }
                ThanksModal.prototype.render = function () {
                    var _this = this;
                    return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Thank You for using our app!"), h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "12" }, h("p", { class: "head" }, "If you haven't had enough yet, click here to try another flow!"), h("pro-button", { onClick: function () { return _this.closeThanks.emit(); } }, "Do It Again!"))), h("pro-row", null, h("pro-col", { size: "12" }, h("h2", null, "Want to learn more?"))), h("pro-row", null, h("pro-col", null, h("p", { class: "content" }, "Checkout the links below explore our more technical references!"))), h("pro-row", null, h("pro-col", { size: "6" }, h("a", { href: "https://stenciljs.com/" }, h("pro-button", null, "StencilJS Docs"))), h("pro-col", { size: "6" }, h("a", { href: "https://docs.google.com/document/d/1XOm4rwpCExhkX0VSr7b3bP8nKClNq-SvAevzkjQlGFU/edit?usp=sharing" }, h("pro-button", null, "Our Docs")))), h("pro-row", null, h("pro-col", { size: "6" }, h("a", { href: "" }, h("pro-button", null, "UI Library Code"))), h("pro-col", { size: "6" }, h("a", { href: "https://www.npmjs.com/package/pro-ui-library" }, h("pro-button", null, "UI Library NPM")))), h("pro-row", null, h("pro-col", { size: "6" }, h("a", { href: "" }, h("pro-button", null, "App Code"))), h("pro-col", { size: "6" }, h("a", { href: "https://heroku.com" }, h("pro-button", null, "Heroku Hosting"))))))));
                };
                Object.defineProperty(ThanksModal, "style", {
                    get: function () { return "h2 {\n  text-align: center;\n}\n\np.head {\n  font-size: 15px;\n  text-align: center;\n}\n\np.content {\n  font-size: 12px;\n  text-align: center;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ThanksModal;
            }());
            exports('thanks_modal', ThanksModal);
        }
    };
});
