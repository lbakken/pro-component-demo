System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.n;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var ProCard = /** @class */ (function () {
                function ProCard(hostRef) {
                    registerInstance(this, hostRef);
                    this.button = false;
                    this.type = 'button';
                    this.disabled = false;
                    this.win = getContext(this, "window");
                }
                ProCard.prototype.isClickable = function () {
                    return (this.href !== undefined || this.button);
                };
                ProCard.prototype.hostData = function () {
                    return {
                        class: {
                            'card-disabled': this.disabled,
                            'ion-activatable': this.isClickable()
                        }
                    };
                };
                ProCard.prototype.__stencil_render = function () {
                    var clickable = this.isClickable();
                    if (!clickable) {
                        return [
                            h("slot", null)
                        ];
                    }
                    var href = this.href;
                    var TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
                    var attrs = (TagType === 'button')
                        ? { type: this.type }
                        : {
                            href: this.href,
                            rel: this.rel,
                            target: this.target
                        };
                    return (h(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled }), h("slot", null), clickable && h("pro-ripple-effect", null)));
                };
                ProCard.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(ProCard, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\npro-card {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  -webkit-box-shadow: 0 1px 3px #b7b7b7;\n  box-shadow: 0 1px 3px #b7b7b7;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-color: #0a0908;\n  border-width: 1px;\n  font-size: 16px;\n  padding: 5px;\n  margin: 5px;\n  background-color: #fdfffc;\n  min-height: 200px;\n  max-height: 500px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProCard;
            }());
            exports('pro_card', ProCard);
        }
    };
});
