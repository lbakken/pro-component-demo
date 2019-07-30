System.register(['./chunk-5603b3cb.system.js', './chunk-17730780.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host, getElement, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.f;
                h = module.h;
                Host = module.H;
                getElement = module.c;
            }, function (module) {
                createColorClasses = module.c;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             *
             * @slot - Content is placed between the named slots if provided without a slot.
             * @slot start - Content is placed to the left of the toolbar text in LTR, and to the right in RTL.
             * @slot secondary - Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode.
             * @slot primary - Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode.
             * @slot end - Content is placed to the right of the toolbar text in LTR, and to the left in RTL.
             */
            var Toolbar = /** @class */ (function () {
                function Toolbar(hostRef) {
                    registerInstance(this, hostRef);
                    this.childrenStyles = new Map();
                }
                Toolbar.prototype.componentWillLoad = function () {
                    var buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
                    var firstButtons = buttons.find(function (button) {
                        return button.slot === 'start';
                    });
                    if (firstButtons) {
                        firstButtons.classList.add('buttons-first-slot');
                    }
                    var buttonsReversed = buttons.reverse();
                    var lastButtons = buttonsReversed.find(function (button) { return button.slot === 'end'; }) ||
                        buttonsReversed.find(function (button) { return button.slot === 'primary'; }) ||
                        buttonsReversed.find(function (button) { return button.slot === 'secondary'; });
                    if (lastButtons) {
                        lastButtons.classList.add('buttons-last-slot');
                    }
                };
                Toolbar.prototype.childrenStyle = function (ev) {
                    ev.stopPropagation();
                    var tagName = ev.target.tagName;
                    var updatedStyles = ev.detail;
                    var newStyles = {};
                    var childStyles = this.childrenStyles.get(tagName) || {};
                    var hasStyleChange = false;
                    Object.keys(updatedStyles).forEach(function (key) {
                        var childKey = "toolbar-" + key;
                        var newValue = updatedStyles[key];
                        if (newValue !== childStyles[childKey]) {
                            hasStyleChange = true;
                        }
                        if (newValue) {
                            newStyles[childKey] = true;
                        }
                    });
                    if (hasStyleChange) {
                        this.childrenStyles.set(tagName, newStyles);
                        this.el.forceUpdate();
                    }
                };
                Toolbar.prototype.render = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var childStyles = {};
                    this.childrenStyles.forEach(function (value) {
                        Object.assign(childStyles, value);
                    });
                    return (h(Host, { class: Object.assign((_a = {}, _a[mode] = true, _a), childStyles, createColorClasses(this.color)) }, h("div", { class: "toolbar-background" }), h("div", { class: "toolbar-container" }, h("slot", { name: "start" }), h("slot", { name: "secondary" }), h("div", { class: "toolbar-content" }, h("slot", null)), h("slot", { name: "primary" }), h("slot", { name: "end" }))));
                };
                Object.defineProperty(Toolbar.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Toolbar, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the toolbar\n   *\n   * \@prop --border-color: Color of the toolbar border\n   * \@prop --border-style: Style of the toolbar border\n   * \@prop --border-width: Width of the toolbar border\n   *\n   * \@prop --color: Color of the toolbar text\n   *\n   * \@prop --min-height: Minimum height of the toolbar\n   *\n   * \@prop --opacity: Opacity of the toolbar background\n   *\n   * \@prop --padding-top: Top padding of the toolbar\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the toolbar\n   * \@prop --padding-bottom: Bottom padding of the toolbar\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the toolbar\n   */\n  --border-width: 0;\n  --border-style: solid;\n  --opacity: 1;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: var(--ion-safe-area-left);\n  padding-right: var(--ion-safe-area-right);\n  display: block;\n  position: relative;\n  width: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  contain: content;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-safe-area-left);\n    padding-inline-start: var(--ion-safe-area-left);\n    -webkit-padding-end: var(--ion-safe-area-right);\n    padding-inline-end: var(--ion-safe-area-right);\n  }\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-color) .toolbar-background {\n  background: var(--ion-color-base);\n}\n\n.toolbar-container {\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  contain: content;\n  overflow: hidden;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toolbar-container {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.toolbar-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  contain: strict;\n  opacity: var(--opacity);\n  z-index: -1;\n  pointer-events: none;\n}\n\n::slotted(ion-progress-bar) {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n\n:host {\n  --background: var(--ion-toolbar-background, var(--ion-color-step-50, #fff));\n  --color: var(--ion-toolbar-color, var(--ion-text-color, #000));\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 44px;\n}\n\n.toolbar-content {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-order: 4;\n  order: 4;\n  min-width: 0;\n}\n\n:host(.toolbar-segment) {\n  --min-height: auto;\n}\n\n::slotted([slot=start]) {\n  -ms-flex-order: 2;\n  order: 2;\n}\n\n::slotted([slot=secondary]) {\n  -ms-flex-order: 3;\n  order: 3;\n}\n\n::slotted([slot=primary]) {\n  -ms-flex-order: 5;\n  order: 5;\n  text-align: end;\n}\n\n::slotted([slot=end]) {\n  -ms-flex-order: 6;\n  order: 6;\n  text-align: end;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Toolbar;
            }());
            exports('ion_toolbar', Toolbar);
        }
    };
});
