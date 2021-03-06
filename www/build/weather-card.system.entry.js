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
            var WeatherCard = /** @class */ (function () {
                function WeatherCard(hostRef) {
                    registerInstance(this, hostRef);
                    this.styleSet = createEvent(this, "styleSet", 7);
                    this.weatherButtonClick = createEvent(this, "weatherButtonClick", 7);
                }
                WeatherCard.prototype.onHistoryChange = function (newValue) {
                    this.history = newValue;
                    this.updateInfo();
                };
                WeatherCard.prototype.updateInfo = function () {
                    this.subHeader = 'We\'ve got you covered!';
                    this.body = 'Follow the link below!';
                    this.button = 'Continue';
                    this.icon = h("img", null);
                    if (this.isProCust == true) {
                        this.subHeader = 'Need a new quote?';
                        this.button = 'Get a new Quote!';
                    }
                    else if (this.isProCust == false) {
                        this.subHeader = 'Need a quote?';
                        this.button = 'Get a Quote!';
                    }
                    this.styleSet.emit(this.history);
                    switch (this.history) {
                        case 'none':
                            this.header = h("h1", { class: "sunny" }, "Looks Clear to Me!");
                            this.subHeader = 'What a beautiful day!';
                            this.icon = h("img", { src: "../../assets/icon/base.png", alt: "good weather" });
                            break;
                        case 'hail':
                            this.header = h("h1", { class: "dark" }, "Hail got you down?");
                            this.icon = h("img", { src: "../../assets/icon/hail.png", alt: "hail" });
                            break;
                        case 'snow':
                            this.header = h("h1", { class: "dark" }, "Snow got you down?");
                            this.icon = h("img", { src: "../../assets/icon/snow.png", alt: "snow" });
                            break;
                        case 'thunderstorms':
                            this.header = h("h1", { class: "dark" }, "Rain got you down?");
                            this.icon = h("img", { src: "../../assets/icon/rain.png", alt: "rain" });
                            break;
                        case 'wind':
                            this.header = h("h1", { class: "dark" }, "Wind got you down?");
                            this.icon = h("img", { src: "../../assets/icon/wind.png", alt: "wind" });
                            break;
                        default:
                            this.header = 'Oops, something went wrong...';
                            this.body = 'Click below to keep on keeping on.';
                            this.button = 'Keep on Keeping on';
                            break;
                    }
                };
                WeatherCard.prototype.componentWillLoad = function () {
                    this.updateInfo();
                };
                WeatherCard.prototype.render = function () {
                    var _this = this;
                    return (h("pro-card", null, h("pro-content", null, h("h1", null, this.header), this.icon, h("h2", null, this.subHeader), h("pro-grid", null, h("pro-row", null, h("pro-col", null, h("p", null, this.body))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-button", { onClick: function () { return _this.weatherButtonClick.emit(); } }, this.button)))))));
                };
                Object.defineProperty(WeatherCard.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WeatherCard, "watchers", {
                    get: function () {
                        return {
                            "history": ["onHistoryChange"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WeatherCard, "style", {
                    get: function () { return "img {\n    width: 150px;\n    height: 100px;\n    display: block;\n    margin: auto;\n}\n\n.dark {\n    color: rgba(38, 58, 60, 1);\n}\n\n.sunny {\n    color: rgba(252, 213, 129, 1);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return WeatherCard;
            }());
            exports('weather_card', WeatherCard);
        }
    };
});
