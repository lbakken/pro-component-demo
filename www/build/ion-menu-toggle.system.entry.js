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
System.register(['./chunk-5603b3cb.system.js', './chunk-ea7a022a.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host, updateVisibility, toggleMenu;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.f;
                h = module.h;
                Host = module.H;
            }, function (module) {
                updateVisibility = module.u;
                toggleMenu = module.t;
            }],
        execute: function () {
            var MenuToggle = /** @class */ (function () {
                function MenuToggle(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.visible = false;
                    /**
                     * Automatically hides the content when the corresponding menu is not active.
                     *
                     * By default, it's `true`. Change it to `false` in order to
                     * keep `ion-menu-toggle` always visible regardless the state of the menu.
                     */
                    this.autoHide = true;
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
                MenuToggle.prototype.componentDidLoad = function () {
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
                MenuToggle.prototype.visibilityChanged = function () {
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
                MenuToggle.prototype.render = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var hidden = this.autoHide && !this.visible;
                    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: (_a = {},
                            _a[mode] = true,
                            _a['menu-toggle-hidden'] = hidden,
                            _a) }, h("slot", null)));
                };
                Object.defineProperty(MenuToggle, "style", {
                    get: function () { return ":host(.menu-toggle-hidden) {\n  display: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return MenuToggle;
            }());
            exports('ion_menu_toggle', MenuToggle);
        }
    };
});
