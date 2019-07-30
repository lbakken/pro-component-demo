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
System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.c;
            }],
        execute: function () {
            var ProModal = /** @class */ (function () {
                function ProModal(hostRef) {
                    registerInstance(this, hostRef);
                    this.presented = false;
                }
                ProModal.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (!this.presented)
                                this.presented = true;
                            return [2 /*return*/];
                        });
                    });
                };
                ProModal.prototype.dismiss = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (this.presented)
                                this.presented = false;
                            return [2 /*return*/];
                        });
                    });
                };
                ProModal.prototype.render = function () {
                    var _this = this;
                    return (this.presented) ? (h(Host, null, h("pro-backdrop", { onClick: function () { return _this.dismiss(); } }), h("div", { class: "modal-window" }, h("div", { class: "modal-content" }, h("slot", null))))) : (h(Host, null));
                };
                Object.defineProperty(ProModal.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProModal, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\n:host .modal-window {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 2%;\n  bottom: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  z-index: 15;\n  background: #fdfffc;\n  border-radius: 25px;\n  width: 80%;\n  min-height: 40%;\n  max-height: 60%;\n  padding: 30px;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\@media only screen and (max-width: 600px) {\n  :host .modal-window {\n    width: 80%;\n    min-height: 50%;\n  }\n}\n\@media only screen and (min-width: 600px) {\n  :host .modal-window {\n    width: 80%;\n    min-height: 50%;\n  }\n}\n:host .modal-content {\n  width: 100%;\n  height: 100%;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProModal;
            }());
            exports('pro_modal', ProModal);
        }
    };
});
