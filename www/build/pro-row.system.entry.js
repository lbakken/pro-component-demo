System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var ProRow = /** @class */ (function () {
                function ProRow(hostRef) {
                    registerInstance(this, hostRef);
                }
                ProRow.prototype.render = function () {
                    return (h("slot", null));
                };
                Object.defineProperty(ProRow, "style", {
                    get: function () { return "pro-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProRow;
            }());
            exports('pro_row', ProRow);
        }
    };
});
