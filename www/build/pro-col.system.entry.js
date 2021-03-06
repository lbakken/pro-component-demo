System.register(['./chunk-5603b3cb.system.js', './chunk-ead57654.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, h, getElement, Host, matchBreakpoint;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.n;
                h = module.h;
                getElement = module.c;
                Host = module.H;
            }, function (module) {
                matchBreakpoint = module.m;
            }],
        execute: function () {
            var win = window;
            var SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
            var BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
            var ProCol = /** @class */ (function () {
                function ProCol(hostRef) {
                    registerInstance(this, hostRef);
                    this.win = getContext(this, "window");
                }
                ProCol.prototype.onResize = function () {
                    this.el.forceUpdate();
                };
                ProCol.prototype.getColumns = function (property) {
                    var matched;
                    for (var _i = 0, BREAKPOINTS_1 = BREAKPOINTS; _i < BREAKPOINTS_1.length; _i++) {
                        var breakpoint = BREAKPOINTS_1[_i];
                        var matches = matchBreakpoint(this.win, breakpoint);
                        var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
                        if (matches && columns !== undefined) {
                            matched = columns;
                        }
                    }
                    return matched;
                };
                ProCol.prototype.calculateSize = function () {
                    var columns = this.getColumns('size');
                    if (!columns || columns === '') {
                        return;
                    }
                    var colSize = (columns === 'auto')
                        ? 'auto'
                        : SUPPORTS_VARS ? "calc(calc(" + columns + " / var(--pro-grid-columns, 12)) * 100%)"
                            : ((columns / 12) * 100) + '%';
                    return {
                        'flex': "0 0 " + colSize,
                        'width': "" + colSize,
                        'max-width': "" + colSize
                    };
                };
                ProCol.prototype.calculatePosition = function (property, modifier) {
                    var _a;
                    var columns = this.getColumns(property);
                    if (!columns) {
                        return;
                    }
                    var amount = SUPPORTS_VARS
                        ? "calc(calc(" + columns + " / var(--pro-grid-columns, 12)) * 100%)"
                        : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
                    return _a = {},
                        _a[modifier] = amount,
                        _a;
                };
                ProCol.prototype.calculateOffset = function (isRTL) {
                    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
                };
                ProCol.prototype.calculatePull = function (isRTL) {
                    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
                };
                ProCol.prototype.calculatePush = function (isRTL) {
                    return this.calculatePosition('push', isRTL ? 'right' : 'left');
                };
                ProCol.prototype.hostData = function () {
                    var isRTL = this.win.document.dir === 'rtl';
                    return {
                        style: Object.assign({}, this.calculateOffset(isRTL), this.calculatePull(isRTL), this.calculatePush(isRTL), this.calculateSize())
                    };
                };
                ProCol.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(ProCol.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                ProCol.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ProCol, "style", {
                    get: function () { return "pro-col {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProCol;
            }());
            exports('pro_col', ProCol);
        }
    };
});
