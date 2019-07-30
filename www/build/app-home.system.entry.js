var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.c;
            }],
        execute: function () {
            /**
             * @name getDarkSkiesApiResponse
             * @summary Makes a call to the Dark Skies API
             * @param city optional parameter, expecting a city name
             * if supplied will get weather for that city
             * @param forcastDate optional parameter, expecting UNIX timestamp
             * if supplied will get weather from given time to 24 hours after
             * @param coordinates optional parameter, expecting coordinates object
             * if supplied, overrides city and gets weather for that location
             * @returns DarkSkiesWeather object mapped to the API Response
             */
            function getDarkSkiesApiResponse(city, forcastDate, coordinates) {
                if (city === void 0) { city = "Cleveland"; }
                if (forcastDate === void 0) { forcastDate = Math.round(+new Date() / 1000); }
                return __awaiter(this, void 0, void 0, function () {
                    var longitude, latitide, openWeatherResponse, apiKey, proxyUrl, apiUrl, darkSkiesApiResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!coordinates) return [3 /*break*/, 1];
                                longitude = coordinates.longitude;
                                latitide = coordinates.latitude;
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, getOpenWeatherApiResponse(city)];
                            case 2:
                                openWeatherResponse = _a.sent();
                                longitude = openWeatherResponse.coord.lon;
                                latitide = openWeatherResponse.coord.lat;
                                _a.label = 3;
                            case 3:
                                apiKey = "5b1a0e3a0304d5a3058513c15c9bd987";
                                proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                                apiUrl = "https://api.darksky.net/forecast/" + apiKey + "/" + latitide + "," + longitude + "," + forcastDate;
                                return [4 /*yield*/, fetch(proxyUrl + apiUrl)
                                        .then(function (response) { return response.json(); })
                                        .then(function (response) { darkSkiesApiResponse = response; })];
                            case 4:
                                _a.sent();
                                return [2 /*return*/, darkSkiesApiResponse];
                        }
                    });
                });
            }
            /**
             * @name getOpenWeatherApiResponse
             * @summary gets api response from open weather API
             * @param city ptional parameter, expecting a city name
             * if supplied will get weather for that city
             * @returns Promise of OpenWeather which is an object for mapping the response
             */
            function getOpenWeatherApiResponse(city) {
                if (city === void 0) { city = "Cleveland"; }
                return __awaiter(this, void 0, void 0, function () {
                    var apiKey, apiUrl, weatherApiResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                apiKey = "0e6736aa176b5c618a775168e0af47d8";
                                apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
                                return [4 /*yield*/, fetch(apiUrl)
                                        .then(function (response) { return response.json(); })
                                        .then(function (response) { weatherApiResponse = response; })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, weatherApiResponse];
                        }
                    });
                });
            }
            /**
             * @name parseForDangerousWeather
             * @summary Parses Dark skies weather object for dangerous weather (hail, wind, snow, thunderstorms)
             * @param apiResponse Expecting Dark Skies Weather Object
             * @returns type of dangerous weather found, as a string, returns "none" if nothing found
             */
            function parseForDangerousWeather(apiResponse) {
                var dangerousWeatherArray = ["hail", "wind", "snow", "thunderstorms", "rain"];
                var dangerousWeatherResponse;
                for (var i = 0; i < apiResponse.hourly.data.length; i++) {
                    var apiElement = apiResponse.hourly.data[i].icon.toLowerCase();
                    for (var j = 0; j < dangerousWeatherArray.length; j++) {
                        var dangerousWeatherElement = dangerousWeatherArray[j];
                        if (apiElement.search(dangerousWeatherElement) != -1) {
                            dangerousWeatherResponse = dangerousWeatherElement;
                            if (dangerousWeatherResponse == "rain") {
                                dangerousWeatherResponse = "thunderstorms";
                            }
                            return dangerousWeatherResponse;
                        }
                    }
                }
                return "none";
            }
            /**
             * @name getThreeDaysOfDarkSkyData
             * @summary makes 3 apis calls to dark skies, for more info
             * @returns a promise of a list of 3 Dark skies weather objects
             */
            function getThreeDaysOfDarkSkyData(city, coordinates) {
                if (city === void 0) { city = "Cleveland"; }
                return __awaiter(this, void 0, void 0, function () {
                    var apiResponses, unixDay, currentUnixDate, forcastDate, i;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                apiResponses = [];
                                unixDay = 86400;
                                currentUnixDate = Math.round((+new Date() / 1000));
                                forcastDate = currentUnixDate - (unixDay * 3);
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < 3)) return [3 /*break*/, 4];
                                return [4 /*yield*/, getDarkSkiesApiResponse(city, forcastDate, coordinates).then(function (response) {
                                        apiResponses.push(response);
                                    })];
                            case 2:
                                _a.sent();
                                forcastDate += unixDay;
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/, apiResponses];
                        }
                    });
                });
            }
            /**
             * @name checkForBadWeatherByCity
             * @summary for front end use, will check for bad weather in a given city
             * @param city expecting a string,
             * @returns Promise<string> which will be a one of 5 options, hail, snow, thunderstorms, wind, none
             */
            function checkForBadWeatherByCity(city) {
                return __awaiter(this, void 0, void 0, function () {
                    var apiResponses, dangerousWeatherResponse, i;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getThreeDaysOfDarkSkyData(city)];
                            case 1:
                                apiResponses = _a.sent();
                                for (i = 0; i < apiResponses.length; i++) {
                                    dangerousWeatherResponse = parseForDangerousWeather(apiResponses[i]);
                                    if (dangerousWeatherResponse != "none") {
                                        return [2 /*return*/, dangerousWeatherResponse];
                                    }
                                }
                                return [2 /*return*/, dangerousWeatherResponse];
                        }
                    });
                });
            }
            /**
             * @name checkForBadWeatherByBrowser
             * @summary Uses browser to get location and checks for bad weather
             * @Returns Promise of type string and, one of 5 options, hail, snow, thunderstorms, wind, non
             */
            function checkForBadWeatherByBrowser() {
                return __awaiter(this, void 0, void 0, function () {
                    var apiResponses, dangerousWeatherResponse, coordinates, i;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, navigator.geolocation.getCurrentPosition(function (position) {
                                    coordinates = position.coords;
                                })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, getThreeDaysOfDarkSkyData(undefined, coordinates).then(function (response) { return (apiResponses = response); })];
                            case 2:
                                _a.sent();
                                for (i = 0; i < apiResponses.length; i++) {
                                    dangerousWeatherResponse = parseForDangerousWeather(apiResponses[i]);
                                }
                                return [2 /*return*/, dangerousWeatherResponse];
                        }
                    });
                });
            }
            var AppHome = /** @class */ (function () {
                function AppHome(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.weather = '';
                    this.openQuestionModal = function () {
                        _this.progQuestion.present();
                    };
                    this.openQuoteModal = function () {
                        _this.weather != 'none' ? _this.generalRedirect.present() : _this.quoteModal.present();
                    };
                    this.openClaimModal = function () {
                        _this.claimModal.present();
                    };
                }
                AppHome.prototype.componentDidLoad = function () {
                    var modals = this.el.querySelectorAll('pro-modal');
                    this.claimModal = modals.item(0);
                    this.quoteModal = modals.item(1);
                    this.thanksModal = modals.item(2);
                    this.oopsModal = modals.item(3);
                    this.generalRedirect = modals.item(4);
                    this.progQuestion = modals.item(5);
                    this.header = document.querySelector('h1');
                };
                AppHome.prototype.makeAPIcall = function () {
                    var _this = this;
                    if (this.weather == '') {
                        if (this.city != null) {
                            checkForBadWeatherByCity(this.city).then(function (value) {
                                _this.weather = value;
                            }).catch(function (er) {
                                console.warn(er);
                                _this.oopsModal.present();
                            });
                        }
                        else {
                            checkForBadWeatherByBrowser().then(function (value) {
                                _this.weather = value;
                            }).catch(function (er) {
                                console.warn(er);
                                _this.oopsModal.present();
                            });
                        }
                    }
                };
                AppHome.prototype.reset = function () {
                    window.location.reload();
                };
                AppHome.prototype.onCloseClaim = function () {
                    this.claimModal.dismiss();
                    this.thanksModal.present();
                };
                AppHome.prototype.onCloseQuote = function () {
                    this.quoteModal.dismiss();
                    this.thanksModal.present();
                };
                AppHome.prototype.onCloseThanks = function () {
                    this.thanksModal.dismiss();
                    this.reset();
                };
                AppHome.prototype.onCloseOops = function () {
                    this.oopsModal.dismiss();
                    this.reset();
                };
                AppHome.prototype.onChangeWeather = function (event) {
                    this.weather = event.detail.weather;
                    this.header.style.color = 'rgba(38, 58, 60, 1)';
                };
                AppHome.prototype.onIsCustomer = function (event) {
                    this.isCustomer = event.detail.response;
                    if (this.weather == 'none') {
                        this.quoteModal.present();
                    }
                    else if (this.weather) {
                        this.isCustomer ? this.claimModal.present() : this.generalRedirect.present();
                    }
                };
                AppHome.prototype.onLocationChange = function (ev) {
                    ev.detail ? this.city = ev.detail.city.value : this.city = null;
                    this.makeAPIcall();
                };
                AppHome.prototype.onWeatherButtonClick = function () {
                    if (this.isCustomer == null) {
                        this.openQuestionModal();
                    }
                    else {
                        if (this.weather == 'none') {
                            this.quoteModal.present();
                        }
                        else if (this.weather) {
                            this.isCustomer ? this.claimModal.present() : this.generalRedirect.present();
                        }
                    }
                };
                AppHome.prototype.changeWeatherBackground = function (event) {
                    if (event.detail == 'none') {
                        this.header.style.color = 'rgba(252, 213, 129, 1)';
                    }
                    else {
                        this.header.style.color = 'rgba(38, 58, 60, 1)';
                    }
                };
                AppHome.prototype.render = function () {
                    var _this = this;
                    return (h(Host, null, h("pro-header", { onClick: function () { return _this.reset(); } }, h("ion-toolbar", null, h("h1", { id: "main-header" }, "Home"), (this.weather == '') ?
                        h("div", null)
                        :
                            h("img", { id: "home", src: "../assets/icon/house.png" }))), h("div", null, h("pro-grid", null, (this.weather == '') ?
                        h("div", null, h("pro-row", null, h("pro-col", null, h("welcome-card", null))), h("pro-row", null, h("pro-col", null, h("location-card", null))))
                        :
                            h("pro-row", null, h("pro-col", null, h("weather-card", { history: this.weather }))), h("pro-row", null, h("pro-col", null, h("default-links", null))))), h("ion-footer", null, h("ion-toolbar", null, "\u00A0 Powered By ", h("a", { href: "https://darksky.net/dev" }, "Dark Sky API"))), h("div", { class: "modal-container" }, h("claim-form", null), h("quote-form", null), h("thanks-modal", null), h("oops-modal", null), h("general-redirect", null), h("prog-cust-question", null))));
                };
                Object.defineProperty(AppHome.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppHome, "style", {
                    get: function () { return "#main-header {\n  cursor: pointer;\n  color: rgba(252, 213, 129, 1);\n}\n\ndiv {\n  overflow: auto;\n}\n\ndiv.modal-container {\n  height: 0px;\n}\n\nion-toolbar {\n  color: rgba(252, 213, 129, 1);\n  font-weight: bolder;\n}\n\npro-footer {\n  font-family: \'Raleway\', Helvetica, sans-serif;\n}\n\nimg {\n  width: 100px;\n}\n\n#home {\n  width: 25px;\n  height: 20px;\n  position: absolute;\n  left: 20px;\n  top: 33px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return AppHome;
            }());
            exports('app_home', AppHome);
        }
    };
});
