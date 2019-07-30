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
            var OopsModal = /** @class */ (function () {
                function OopsModal(hostRef) {
                    registerInstance(this, hostRef);
                    this.closeOops = createEvent(this, "closeOops", 7);
                }
                OopsModal.prototype.render = function () {
                    var _this = this;
                    return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Well this is strange. . ."), h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "12" }, h("p", { class: "head" }, "We couldn't find that city."))), h("pro-row", null, h("pro-col", { size: "12" }, h("p", { class: "content" }, "Don't worry, let's try again!"), h("pro-button", { onClick: function () { return _this.closeOops.emit(); } }, "Try Again!")))))));
                };
                Object.defineProperty(OopsModal, "style", {
                    get: function () { return "h2 {\n  text-align: center;\n}\n\np.head {\n  font-size: 15px;\n  text-align: center;\n  margin-top: 50px;\n}\n\np.content {\n  font-size: 12px;\n  text-align: center;\n  margin-top: 50px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return OopsModal;
            }());
            exports('oops_modal', OopsModal);
        }
    };
});
