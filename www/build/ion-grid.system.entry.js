System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.f;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Grid = /** @class */ (function () {
                function Grid(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, the grid will have a fixed width based on the screen size.
                     */
                    this.fixed = false;
                }
                Grid.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a[mode] = true,
                            _a['grid-fixed'] = this.fixed,
                            _a)
                    };
                };
                Grid.prototype.__stencil_render = function () {
                    return h("slot", null);
                };
                Grid.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Grid, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --ion-grid-padding: Padding for the Grid\n   * \@prop --ion-grid-padding-xs: Padding for the Grid on xs screens\n   * \@prop --ion-grid-padding-sm: Padding for the Grid on sm screens\n   * \@prop --ion-grid-padding-md: Padding for the Grid on md screens\n   * \@prop --ion-grid-padding-lg: Padding for the Grid on lg screens\n   * \@prop --ion-grid-padding-xl: Padding for the Grid on xl screens\n   *\n   * \@prop --ion-grid-width: Width of the fixed Grid\n   * \@prop --ion-grid-width-xs: Width of the fixed Grid on xs screens\n   * \@prop --ion-grid-width-sm: Width of the fixed Grid on sm screens\n   * \@prop --ion-grid-width-md: Width of the fixed Grid on md screens\n   * \@prop --ion-grid-width-lg: Width of the fixed Grid on lg screens\n   * \@prop --ion-grid-width-xl: Width of the fixed Grid on xl screens\n   */\n  padding-left: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  padding-right: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  padding-top: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  padding-bottom: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  -ms-flex: 1;\n  flex: 1;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n    padding-inline-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n    -webkit-padding-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n    padding-inline-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  }\n}\n\@media (min-width: 576px) {\n  :host {\n    padding-left: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n    padding-right: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n    padding-top: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n    padding-bottom: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n      padding-inline-start: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n      padding-inline-end: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n    }\n  }\n}\n\@media (min-width: 768px) {\n  :host {\n    padding-left: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n    padding-right: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n    padding-top: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n    padding-bottom: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n      padding-inline-start: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n      padding-inline-end: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n    }\n  }\n}\n\@media (min-width: 992px) {\n  :host {\n    padding-left: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n    padding-right: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n    padding-top: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n    padding-bottom: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n      padding-inline-start: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n      padding-inline-end: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n    }\n  }\n}\n\@media (min-width: 1200px) {\n  :host {\n    padding-left: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n    padding-right: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n    padding-top: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n    padding-bottom: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n  }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n      padding-inline-start: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n      padding-inline-end: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n    }\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n:host(.grid-fixed) {\n  width: var(--ion-grid-width-xs, var(--ion-grid-width, 100%));\n  max-width: 100%;\n}\n\@media (min-width: 576px) {\n  :host(.grid-fixed) {\n    width: var(--ion-grid-width-sm, var(--ion-grid-width, 540px));\n  }\n}\n\@media (min-width: 768px) {\n  :host(.grid-fixed) {\n    width: var(--ion-grid-width-md, var(--ion-grid-width, 720px));\n  }\n}\n\@media (min-width: 992px) {\n  :host(.grid-fixed) {\n    width: var(--ion-grid-width-lg, var(--ion-grid-width, 960px));\n  }\n}\n\@media (min-width: 1200px) {\n  :host(.grid-fixed) {\n    width: var(--ion-grid-width-xl, var(--ion-grid-width, 1140px));\n  }\n}\n\n:host([no-padding]) {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n:host([no-padding]) ::slotted(ion-col) {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Grid;
            }());
            exports('ion_grid', Grid);
        }
    };
});
