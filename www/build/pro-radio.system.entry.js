System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                h = module.h;
                getElement = module.c;
            }],
        execute: function () {
            var ProRadio = /** @class */ (function () {
                function ProRadio(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.name = 'default-radio-name';
                    this.disabled = false;
                    this.checked = false;
                    this.onClick = function () {
                        if (_this.checked) {
                            _this.proDeselect.emit();
                        }
                        else {
                            _this.checked = true;
                        }
                    };
                    this.proRadioDidLoad = createEvent(this, "proRadioDidLoad", 7);
                    this.proRadioDidUnload = createEvent(this, "proRadioDidUnload", 7);
                    this.proSelect = createEvent(this, "proSelect", 7);
                    this.proDeselect = createEvent(this, "proDeselect", 7);
                    this.proStyle = createEvent(this, "proStyle", 7);
                }
                ProRadio.prototype.nameChanged = function () {
                    this.emitStyle();
                };
                ProRadio.prototype.checkedChanged = function (isChecked) {
                    if (isChecked) {
                        this.proSelect.emit({
                            checked: true,
                            value: this.value
                        });
                    }
                    this.emitStyle();
                };
                ProRadio.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                ProRadio.prototype.componentWillLoad = function () {
                    this.emitStyle();
                };
                ProRadio.prototype.componentDidLoad = function () {
                    this.proRadioDidLoad.emit();
                };
                ProRadio.prototype.componentDidUnload = function () {
                    this.proRadioDidUnload.emit();
                };
                ProRadio.prototype.emitStyle = function () {
                    this.proStyle.emit({
                        'radio-checked': this.checked,
                        'interactive-disabled': this.disabled,
                        'radio-value': this.value
                    });
                };
                /* <Host
                                onClick={this.onClick}
                                role="radio"
                                class={{
                                    'radio-checked': this.checked,
                                    'radio-disabled': this.disabled
                                }}
                            >
                                <div class="radio-icon">
                                    <div class="radio-inner" />
                                </div>
                                <button
                                    type="button"
                                    disabled={this.disabled}
                                >
                                </button>
                            </Host> */
                ProRadio.prototype.render = function () {
                    return (h("input", { type: "radio", onClick: this.onClick, name: this.name, value: this.value, checked: this.checked }));
                };
                Object.defineProperty(ProRadio.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProRadio, "watchers", {
                    get: function () {
                        return {
                            "name": ["nameChanged"],
                            "checked": ["checkedChanged"],
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProRadio, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\ninput[type=radio]:after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -2px;\n  left: -1px;\n  position: relative;\n  background-color: #b7b7b7;\n  content: \"\";\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n}\n\ninput[type=radio]:checked:after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -2px;\n  left: -1px;\n  position: relative;\n  background-color: #30bced;\n  content: \"\";\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n}\n\ninput[type=radio]:hover:after {\n  background: #1e96ff;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProRadio;
            }());
            exports('pro_radio', ProRadio);
        }
    };
});
