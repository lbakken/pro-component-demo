System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var MyComponent = /** @class */ (function () {
                function MyComponent(hostRef) {
                    registerInstance(this, hostRef);
                    //Jons Key -- 0e6736aa176b5c618a775168e0af47d8
                    this.apiKey = "0e6736aa176b5c618a775168e0af47d8";
                    this.city = "London";
                    //default Current weather url
                    this.apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=" + this.apiKey;
                }
                MyComponent.prototype.componentWillLoad = function () {
                    var _this = this;
                    fetch(this.apiUrl)
                        .then(function (response) { return response.json(); })
                        .then(function (response) { _this.weatherApiResponse = response; });
                };
                MyComponent.prototype.render = function () {
                    return (h("div", null, h("h2", null, "Weather API"), h("p", null, this.weatherApiResponse.coord.lon), h("p", null, this.weatherApiResponse.coord.lat)));
                };
                return MyComponent;
            }());
            exports('weather_api_component', MyComponent);
        }
    };
});
