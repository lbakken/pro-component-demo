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
            var ProButton = /** @class */ (function () {
                function ProButton(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.type = 'button';
                    this.disabled = false;
                    this.handleClick = function (ev) {
                        var form = _this.el.closest('form');
                        if (form) {
                            ev.preventDefault();
                            var fakeButton = document.createElement('button');
                            fakeButton.type = _this.type;
                            fakeButton.style.display = 'none';
                            form.appendChild(fakeButton);
                            fakeButton.click();
                            fakeButton.remove();
                        }
                    };
                }
                ProButton.prototype.render = function () {
                    return (h("button", { class: "button-native", disabled: this.disabled, type: this.type, onClick: this.handleClick }, h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" }))));
                };
                Object.defineProperty(ProButton.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProButton, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\n:host .button-native {\n  background-color: #263a3c;\n  padding: 5px;\n  border-radius: 10%;\n  padding-top: 10px;\n  border-radius: 5px;\n  color: #fdfffc;\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 14px;\n  text-transform: uppercase;\n  width: 100%;\n  min-height: 35px;\n  max-height: 70px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  cursor: pointer;\n}\n:host .button-inner {\n  font-weight: bold;\n}\n:host button:disabled {\n  background-color: gray;\n  color: white;\n  cursor: auto;\n  font-size: 14px;\n}\n:host :hover {\n  background-color: #bdeaf9;\n  color: #263a3c;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  font-size: 16px;\n}\n:host :focus {\n  outline: none;\n  -webkit-box-shadow: 0 1px 3px #b7b7b7;\n  box-shadow: 0 1px 3px #b7b7b7;\n}\n\@media only screen and (max-width: 500px) {\n  :host .button-native {\n    font-size: 10px;\n  }\n  :host :hover {\n    font-size: 12px;\n  }\n  :host button:disabled {\n    font-size: 10px;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProButton;
            }());
            exports('pro_button', ProButton);
        }
    };
});
