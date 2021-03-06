System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.c;
            }],
        execute: function () {
            var ProRadioGroup = /** @class */ (function () {
                function ProRadioGroup(hostRef) {
                    registerInstance(this, hostRef);
                    this.selects = [];
                }
                ProRadioGroup.prototype.onRadioDidLoad = function (ev) {
                    var select = ev.target;
                    select.name = this.name;
                    this.selects.push(select);
                    this.updateRadios();
                };
                ProRadioGroup.prototype.onRadioDidUnload = function (ev) {
                    var index = this.selects.indexOf(ev.target);
                    if (index > -1) {
                        this.selects.splice(index, 1);
                    }
                };
                ProRadioGroup.prototype.onSelect = function (ev) {
                    var selectedRadio = ev.target;
                    if (selectedRadio) {
                        selectedRadio.checked = true;
                        this.value = selectedRadio.value;
                    }
                    this.updateRadios();
                };
                ProRadioGroup.prototype.onDeselect = function (ev) {
                    var selectedRadio = ev.target;
                    if (selectedRadio) {
                        selectedRadio.checked = false;
                        this.value = undefined;
                    }
                    this.updateRadios();
                };
                ProRadioGroup.prototype.componentDidLoad = function () {
                    this.updateRadios();
                };
                ProRadioGroup.prototype.updateRadios = function () {
                    var value = this.value;
                    var hasChecked = false;
                    for (var _i = 0, _a = this.selects; _i < _a.length; _i++) {
                        var select = _a[_i];
                        if (!hasChecked && select.value === value) {
                            hasChecked = true;
                            select.checked = true;
                        }
                        else {
                            select.checked = false;
                        }
                    }
                };
                ProRadioGroup.prototype.render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(ProRadioGroup.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProRadioGroup, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return ProRadioGroup;
            }());
            exports('pro_radio_group', ProRadioGroup);
        }
    };
});
