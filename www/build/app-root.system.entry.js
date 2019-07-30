System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var AppRoot = /** @class */ (function () {
                function AppRoot(hostRef) {
                    registerInstance(this, hostRef);
                }
                AppRoot.prototype.changeWeatherBackground = function (event) {
                    var background = document.querySelector('ion-app');
                    switch (event.detail) {
                        case 'none':
                            background.style.backgroundImage = 'linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%)';
                            break;
                        case 'hail':
                            background.style.backgroundImage = 'linear-gradient(0deg, rgba(67, 62, 54, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
                            break;
                        case 'snow':
                            background.style.backgroundImage = 'linear-gradient(0deg, rgba(77, 101, 110, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
                            break;
                        case 'thunderstorms':
                            background.style.backgroundImage = 'linear-gradient(0deg, rgba(38, 58, 60, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
                            break;
                        case 'wind':
                            background.style.backgroundImage = 'linear-gradient(0deg, rgba(66, 86, 62, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
                            break;
                        default:
                            background.style.backgroundImage = 'linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%)';
                            break;
                    }
                };
                AppRoot.prototype.render = function () {
                    return (h("ion-app", { id: "background-controller" }, h("ion-router", null, h("ion-route", { url: '/', component: 'app-home' })), h("ion-nav", null)));
                };
                Object.defineProperty(AppRoot, "style", {
                    get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n\n:host {\n  font-family: \'Raleway\', Helvetica, sans-serif;\n  --bad-weather-bg: linear-gradient(0deg, rgba(77,101,110,1) 4%, rgba(210,220,221,1) 39%, rgba(252,255,252,1) 58%);\n  --good-weather-bg: linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%);\n}\n\nion-app {\n    background-color: linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%);\n    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(252, 213, 129, 1)), color-stop(65%, rgba(253, 255, 252, 1)));\n    background-image: linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return AppRoot;
            }());
            exports('app_root', AppRoot);
        }
    };
});
