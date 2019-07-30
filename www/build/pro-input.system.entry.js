System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var ProInput = /** @class */ (function () {
                function ProInput(hostRef) {
                    registerInstance(this, hostRef);
                    this.regex = /^(.+)$/;
                    this.required = false;
                    this.inputChange = createEvent(this, "inputChange", 7);
                }
                ProInput.prototype.componentWillLoad = function () {
                    if (this.required) {
                        this.reqLabel = 'required';
                    }
                };
                ProInput.prototype.onInputChange = function (ev) {
                    var value = ev.target.value;
                    var validated = false;
                    if (value != '') {
                        (this.required) ? validated = this.regex.test(value) : validated = true;
                        validated ? this.class = 'valid' : this.class = 'invalid';
                    }
                    else {
                        validated = !this.required;
                        validated ? this.class = '' : this.class = 'invalid';
                    }
                    this.inputChange.emit({
                        name: this.label,
                        value: value,
                        valid: validated
                    });
                };
                ProInput.prototype.render = function () {
                    var _this = this;
                    return (h(Host, null, h("label", { htmlFor: this.label, class: this.reqLabel }, this.label), h("input", { onChange: function (ev) { return _this.onInputChange(ev); }, name: this.label, placeholder: this.placeholder, id: this.label, class: this.class })));
                };
                Object.defineProperty(ProInput, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\n:host {\n  overflow: hidden;\n}\n:host input {\n  width: 100%;\n  height: 20px;\n  border-radius: 5px;\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  padding-left: 5px;\n  margin-top: 2px;\n}\n:host label {\n  width: 100%;\n  font-size: 10px;\n  font-style: italic;\n  margin-bottom: 40px;\n}\n:host label.required {\n  border-bottom: dotted rgba(240, 0, 0, 0.3) 1px;\n}\n:host input:focus {\n  background-color: #bdeaf9;\n  outline: none;\n}\n:host input:hover {\n  background-color: #bdeaf9;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n:host input.valid {\n  background-color: #c4d2c1;\n}\n:host input.invalid {\n  background-color: #e09a9f;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProInput;
            }());
            exports('pro_input', ProInput);
        }
    };
});
