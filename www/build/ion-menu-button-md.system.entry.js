var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./chunk-5603b3cb.system.js', './chunk-17730780.system.js', './chunk-ea7a022a.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, config, h, Host, createColorClasses, updateVisibility, toggleMenu;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.f;
                config = module.e;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
            }, function (module) {
                updateVisibility = module.u;
                toggleMenu = module.t;
            }],
        execute: function () {
            var MenuButton = /** @class */ (function () {
                function MenuButton(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.visible = false;
                    /**
                     * If `true`, the user cannot interact with the menu button.
                     */
                    this.disabled = false;
                    /**
                     * Automatically hides the menu button when the corresponding menu is not active
                     */
                    this.autoHide = true;
                    /**
                     * The type of the button.
                     */
                    this.type = 'button';
                    this.setVisibility = function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, updateVisibility(this.menu)];
                                case 1:
                                    _a.visible = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    this.onClick = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, toggleMenu(this.menu)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                }
                MenuButton.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.setVisibility()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MenuButton.prototype.visibilityChanged = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.setVisibility()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MenuButton.prototype.render = function () {
                    var _a;
                    var _b = this, color = _b.color, disabled = _b.disabled;
                    var mode = getIonMode(this);
                    var menuIcon = config.get('menuIcon', 'menu');
                    var hidden = this.autoHide && !this.visible;
                    var attrs = {
                        type: this.type
                    };
                    return (h(Host, { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign((_a = {}, _a[mode] = true, _a), createColorClasses(color), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'ion-activatable': true, 'ion-focusable': true }) }, h("button", Object.assign({}, attrs, { disabled: this.disabled, class: "button-native" }), h("slot", null, h("ion-icon", { icon: menuIcon, mode: mode, lazy: false })), mode === 'md' && h("ion-ripple-effect", { type: "unbounded" }))));
                };
                Object.defineProperty(MenuButton, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the menu button\n   *\n   * \@prop --background: Background of the menu button\n   * \@prop --background-hover: Background of the menu button on hover\n   * \@prop --background-focused: Background of the menu button when focused with the tab key\n   *\n   * \@prop --color: Color of the menu button\n   * \@prop --color-hover: Color of the menu button on hover\n   * \@prop --color-focused: Color of the menu button when focused with the tab key\n   *\n   * \@prop --padding-top: Top padding of the button\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button\n   * \@prop --padding-bottom: Bottom padding of the button\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button\n   */\n  --background: transparent;\n  --color-focused: var(--color);\n  --border-radius: initial;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  color: var(--color);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\nion-icon {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  pointer-events: none;\n}\n\n:host(.menu-button-hidden) {\n  display: none;\n}\n\n:host(.menu-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    background: var(--background-hover);\n    color: var(--color-hover);\n  }\n}\n:host(.ion-focused) .button-native {\n  background: var(--background-focused);\n  color: var(--color-focused);\n}\n\n:host(.ion-color) .button-native {\n  color: var(--ion-color-base);\n}\n\n:host-context(ion-toolbar:not(.ion-color)) {\n  color: var(--ion-toolbar-color, var(--color));\n}\n\n:host {\n  --background-focused: rgba(66, 66, 66, 0.24);\n  --background-hover: rgba(66, 66, 66, 0.08);\n  --border-radius: 50%;\n  --color: initial;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  width: 48px;\n  height: 48px;\n  font-size: 24px;\n}\n\n\@media (any-hover: hover) {\n  :host(.ion-color:hover) .button-native {\n    background: rgba(var(--ion-color-base-rgb), 0.08);\n  }\n}\n:host(.ion-color.ion-focused) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.24);\n  color: var(--ion-color-base);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return MenuButton;
            }());
            exports('ion_menu_button', MenuButton);
        }
    };
});
