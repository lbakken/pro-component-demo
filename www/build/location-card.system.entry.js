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
            var LocationCard = /** @class */ (function () {
                function LocationCard(hostRef) {
                    registerInstance(this, hostRef);
                    this.city = '';
                    this.location = createEvent(this, "location", 7);
                }
                LocationCard.prototype.handleSubmit = function () {
                    this.location.emit({ city: this.city });
                };
                LocationCard.prototype.handleLocation = function () {
                    this.location.emit();
                };
                LocationCard.prototype.onInputChange = function (ev) {
                    this.city = ev.detail;
                };
                LocationCard.prototype.render = function () {
                    var _this = this;
                    return (h("pro-card", null, h("pro-grid", null, h("pro-row", { class: "extra-space" }, h("pro-col", { size: "8" }, h("pro-input", { placeholder: "Enter City . . .", label: "City" })), h("pro-col", { size: "4", class: "extra-space" }, h("pro-button", { onClick: function () { return _this.handleSubmit(); } }, "Submit"))), h("pro-row", { class: "extra-space" }, h("pro-col", { size: "12" }, h("img", { id: "location", onClick: function () { return _this.handleLocation(); }, src: "https://img.icons8.com/material/24/000000/worldwide-location.png" }), h("pro-label", { onClick: function () { return _this.handleLocation(); }, for: "location", class: "location-text" }, "Use my current location"))))));
                };
                Object.defineProperty(LocationCard.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LocationCard, "style", {
                    get: function () { return ".extra-space {\n  margin-top: 15px;\n}\n\na:hover {\n  cursor: pointer;\n}\n\n.location-text {\n  cursor: pointer;\n}\n\n#location {\n  float: left;\n  width: 18px;\n  height: 18px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n\@media only screen and (min-width: 400px) {\n  #location-text {\n    font-size: 20px;\n  }\n\n  #location {\n    width: 20px;\n    height: 20px;\n  }\n\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return LocationCard;
            }());
            exports('location_card', LocationCard);
        }
    };
});
