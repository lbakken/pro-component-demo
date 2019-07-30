System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var ProGrid = /** @class */ (function () {
                function ProGrid(hostRef) {
                    registerInstance(this, hostRef);
                    this.fixed = false;
                }
                ProGrid.prototype.hostData = function () {
                    return {
                        class: {
                            'grid-fixed': this.fixed
                        }
                    };
                };
                ProGrid.prototype.__stencil_render = function () {
                    return (h("slot", null));
                };
                ProGrid.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ProGrid, "style", {
                    get: function () { return "pro-grid {\n  display: block;\n  -ms-flex: 1;\n  flex: 1;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProGrid;
            }());
            exports('pro_grid', ProGrid);
        }
    };
});
