System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                h = module.h;
            }],
        execute: function () {
            var DefaultLinks = /** @class */ (function () {
                function DefaultLinks(hostRef) {
                    registerInstance(this, hostRef);
                    this.changeWeather = createEvent(this, "changeWeather", 7);
                }
                DefaultLinks.prototype.onChangeWeather = function (weather) {
                    this.changeWeather.emit({ weather: weather });
                };
                DefaultLinks.prototype.render = function () {
                    var _this = this;
                    return (h("pro-card", null, h("pro-grid", null, h("pro-row", null, h("pro-col", null, h("h3", null, "Thank you for using our app!"))), h("pro-row", null, h("pro-col", null, h("p", null, "Want to see more?"), h("p", null, "Click on one of the links below to see what this page looks like during different weather events!"))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-button", { onClick: function () { return _this.onChangeWeather('none'); } }, "Sunny Example"))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { onClick: function () { return _this.onChangeWeather('wind'); } }, "Windy Example")), h("pro-col", { size: "6" }, h("pro-button", { onClick: function () { return _this.onChangeWeather('thunderstorms'); } }, "Rain Example"))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { onClick: function () { return _this.onChangeWeather('hail'); } }, "Hail Example")), h("pro-col", { size: "6" }, h("pro-button", { onClick: function () { return _this.onChangeWeather('snow'); } }, "Snow Example"))))));
                };
                Object.defineProperty(DefaultLinks, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return DefaultLinks;
            }());
            exports('default_links', DefaultLinks);
        }
    };
});
