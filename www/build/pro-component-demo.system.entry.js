System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.c;
            }],
        execute: function () {
            var ProComponentDemo = /** @class */ (function () {
                function ProComponentDemo(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.openModal = function () {
                        _this.modal.present();
                    };
                }
                ProComponentDemo.prototype.componentDidLoad = function () {
                    this.modal = this.el.querySelector('pro-modal');
                };
                ProComponentDemo.prototype.onFormSubmit = function (ev) {
                    ev.preventDefault();
                    console.log(ev);
                    console.log(this.el.querySelector('pro-input'));
                };
                ProComponentDemo.prototype.onInputChange = function (ev) {
                    console.log(ev.detail);
                };
                ProComponentDemo.prototype.render = function () {
                    var _this = this;
                    return (h(Host, null, h("pro-header", null, h("span", { class: "special" }, "Hey there!"), " Let's check out the weather"), h("ion-content", null, h("pro-grid", null, h("pro-row", null, h("pro-col", null, h("pro-card", null, h("pro-content", null, h("p", null, h("span", { class: "special" }, "Uh oh!"), " Major thunderstorms in the past few days!"), h("pro-image", { src: "", id: "changing-icon" }), h("pro-button", { onClick: this.openModal }, "Open Modal And the text is really long"), h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Input Field", label: "Input something here" })), h("pro-col", { size: "6" }, h("pro-input", { required: true, placeholder: "Input Text", label: "This is some text", regex: /^([^0-9]*)$/ }))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-input", { required: true, placeholder: "Not a Field", label: "Fieldish" }))), h("pro-row", null, h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Input Field", label: "Input something" })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Input Text", label: "This is some text" })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Not a Field", label: "Fieldish" })))))))), h("form", { onSubmit: function () { return console.log(event); } }, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-card", null, h("pro-content", null, h("pro-radio-group", { name: "testradiogroup" }, h("pro-radio", { value: "test1" }), h("pro-radio", { value: "test2" }), h("pro-radio", { value: "test3" }), h("pro-radio", { value: "test4" }))))), h("pro-col", { size: "6" }, h("pro-card", null, h("pro-content", null, h("pro-checkbox", { name: "testcheckboxgroup", value: "test1" }), h("pro-checkbox", { name: "testcheckboxgroup", value: "test2" }), h("pro-checkbox", { name: "testcheckboxgroup", value: "test3" }), h("pro-checkbox", { name: "testcheckboxgroup", value: "test4" }))))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { disabled: true, type: "submit" }, "Submit")), h("pro-col", { size: "6" }, h("pro-button", { type: "submit" }, "Submit")))))), h("pro-footer", null, "API information"), h("pro-modal", null, h("pro-content", null, h("form", { onSubmit: function (ev) { return _this.onFormSubmit(ev); } }, h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Input Field", label: "Input something here" })), h("pro-col", { size: "6" }, h("pro-input", { placeholder: "Input Text", label: "This is some text" }))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-input", { placeholder: "Not a Field", label: "Fieldish" }))), h("pro-row", null, h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Input Field", label: "thing" })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Input Text", label: "the next thing" })), h("pro-col", { size: "4" }, h("pro-input", { placeholder: "Not a Field", label: "another thing" }))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-button", { type: "submit" }, "Submit")))))))));
                };
                Object.defineProperty(ProComponentDemo.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return ProComponentDemo;
            }());
            exports('pro_component_demo', ProComponentDemo);
        }
    };
});
