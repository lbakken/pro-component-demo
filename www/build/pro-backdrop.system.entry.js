System.register(['./chunk-5603b3cb.system.js', './chunk-ead57654.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host, now;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                h = module.h;
                Host = module.H;
            }, function (module) {
                now = module.n;
            }],
        execute: function () {
            var ProBackdrop = /** @class */ (function () {
                function ProBackdrop(hostRef) {
                    registerInstance(this, hostRef);
                    this.lastClick = -10000;
                    this.visible = true;
                    this.tappable = true;
                    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
                }
                ProBackdrop.prototype.onTouchStart = function (ev) {
                    this.lastClick = now(ev);
                    this.emitTap();
                };
                ProBackdrop.prototype.onMouseDown = function (ev) {
                    if (this.lastClick < now(ev) - 2500) {
                        this.emitTap();
                    }
                };
                ProBackdrop.prototype.emitTap = function () {
                    if (this.tappable) {
                        this.ionBackdropTap.emit();
                    }
                };
                ProBackdrop.prototype.hostData = function () {
                    return {
                        tabindex: '-1',
                        class: {
                            'backdrop-hide': !this.visible,
                            'backdrop-no-tappable': !this.tappable,
                        }
                    };
                };
                ProBackdrop.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(ProBackdrop, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\n:host {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.42);\n  contain: strict;\n  cursor: pointer;\n  z-index: 14;\n  -webkit-transition: opacity 0.5s, visibility 0s 0.5s;\n  transition: opacity 0.5s, visibility 0s 0.5s;\n}\n\n:host(.backdrop-hide) {\n  background: transparent;\n}\n\n:host(.backdrop-no-tappable) {\n  cursor: auto;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProBackdrop;
            }());
            exports('pro_backdrop', ProBackdrop);
        }
    };
});
