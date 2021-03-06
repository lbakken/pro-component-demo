System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var WelcomeCard = /** @class */ (function () {
                function WelcomeCard(hostRef) {
                    registerInstance(this, hostRef);
                }
                WelcomeCard.prototype.render = function () {
                    return (h("pro-card", null, h("pro-grid", null, h("pro-row", null, h("pro-col", { size: "8" }, h("h2", null, "Welcome to our Intern Project!")), h("pro-col", { size: "4" }, h("h3", null, "Stencil Web Components"))), h("pro-row", null, h("pro-col", { size: "12" }, h("p", null, "For our project, we used stencil web components to create a user interface library and then used that library to create this application! This application checks recent weather events in your area and, based on the weather and whether or not you are a returning customer, will offer you a quote form, a claim form, or redirect you to another insurance provider."))), h("pro-row", null, h("pro-col", { size: "12" }, h("p", null, "To use our app, either enter a city below or allow your web browser to use your location."))))));
                };
                Object.defineProperty(WelcomeCard, "style", {
                    get: function () { return ":host {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return WelcomeCard;
            }());
            exports('welcome_card', WelcomeCard);
        }
    };
});
