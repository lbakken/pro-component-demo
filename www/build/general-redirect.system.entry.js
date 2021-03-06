System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var GeneralRedirect = /** @class */ (function () {
                function GeneralRedirect(hostRef) {
                    registerInstance(this, hostRef);
                }
                GeneralRedirect.prototype.render = function () {
                    return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Thank You For Your Interest!"), h("p", null, "Unfortunately, due to recent weather in your area, we are unable to offer you a quote at this time. Please follow the link below to check with another provider."), h("a", { href: "https://www.thegeneral.com/" }, h("pro-button", null, "Get Another Quote")))));
                };
                Object.defineProperty(GeneralRedirect, "style", {
                    get: function () { return "h1 {\n  text-align: center;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return GeneralRedirect;
            }());
            exports('general_redirect', GeneralRedirect);
        }
    };
});
