import { r as registerInstance, h, H as Host, c as getElement } from './chunk-91927964.js';

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
async function getDarkSkiesApiResponse(city = "Cleveland", forcastDate = Math.round(+new Date() / 1000), coordinates) {
    let longitude;
    let latitide;
    if (coordinates) {
        longitude = coordinates.longitude;
        latitide = coordinates.latitude;
    }
    else {
        let openWeatherResponse = await getOpenWeatherApiResponse(city);
        longitude = openWeatherResponse.coord.lon;
        latitide = openWeatherResponse.coord.lat;
    }
    let apiKey = "5b1a0e3a0304d5a3058513c15c9bd987";
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let apiUrl = `https://api.darksky.net/forecast/${apiKey}/${latitide},${longitude},${forcastDate}`;
    let darkSkiesApiResponse;
    await fetch(proxyUrl + apiUrl)
        .then((response) => response.json())
        .then(response => { darkSkiesApiResponse = response; });
    return darkSkiesApiResponse;
}
/**
 * @name getOpenWeatherApiResponse
 * @summary gets api response from open weather API
 * @param city ptional parameter, expecting a city name
 * if supplied will get weather for that city
 * @returns Promise of OpenWeather which is an object for mapping the response
 */
async function getOpenWeatherApiResponse(city = "Cleveland") {
    let apiKey = "0e6736aa176b5c618a775168e0af47d8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let weatherApiResponse;
    await fetch(apiUrl)
        .then((response) => response.json())
        .then(response => { weatherApiResponse = response; });
    return weatherApiResponse;
}
/**
 * @name parseForDangerousWeather
 * @summary Parses Dark skies weather object for dangerous weather (hail, wind, snow, thunderstorms)
 * @param apiResponse Expecting Dark Skies Weather Object
 * @returns type of dangerous weather found, as a string, returns "none" if nothing found
 */
function parseForDangerousWeather(apiResponse) {
    let dangerousWeatherArray = ["hail", "wind", "snow", "thunderstorms", "rain"];
    let dangerousWeatherResponse;
    for (let i = 0; i < apiResponse.hourly.data.length; i++) {
        let apiElement = apiResponse.hourly.data[i].icon.toLowerCase();
        for (let j = 0; j < dangerousWeatherArray.length; j++) {
            let dangerousWeatherElement = dangerousWeatherArray[j];
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
async function getThreeDaysOfDarkSkyData(city = "Cleveland", coordinates) {
    var apiResponses = [];
    let unixDay = 86400;
    let currentUnixDate = Math.round((+new Date() / 1000));
    let forcastDate = currentUnixDate - (unixDay * 3);
    for (let i = 0; i < 3; i++) {
        await getDarkSkiesApiResponse(city, forcastDate, coordinates).then(response => {
            apiResponses.push(response);
        });
        forcastDate += unixDay;
    }
    return apiResponses;
}
/**
 * @name checkForBadWeatherByCity
 * @summary for front end use, will check for bad weather in a given city
 * @param city expecting a string,
 * @returns Promise<string> which will be a one of 5 options, hail, snow, thunderstorms, wind, none
 */
async function checkForBadWeatherByCity(city) {
    let apiResponses = await getThreeDaysOfDarkSkyData(city);
    let dangerousWeatherResponse;
    for (let i = 0; i < apiResponses.length; i++) {
        dangerousWeatherResponse = parseForDangerousWeather(apiResponses[i]);
        if (dangerousWeatherResponse != "none") {
            return dangerousWeatherResponse;
        }
    }
    return dangerousWeatherResponse;
}
/**
 * @name checkForBadWeatherByBrowser
 * @summary Uses browser to get location and checks for bad weather
 * @Returns Promise of type string and, one of 5 options, hail, snow, thunderstorms, wind, non
 */
async function checkForBadWeatherByBrowser() {
    let apiResponses;
    let dangerousWeatherResponse;
    let coordinates;
    await navigator.geolocation.getCurrentPosition(function (position) {
        coordinates = position.coords;
    });
    await getThreeDaysOfDarkSkyData(undefined, coordinates).then(response => (apiResponses = response));
    for (let i = 0; i < apiResponses.length; i++) {
        dangerousWeatherResponse = parseForDangerousWeather(apiResponses[i]);
    }
    return dangerousWeatherResponse;
}

class AppHome {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.weather = '';
        this.openQuestionModal = () => {
            this.progQuestion.present();
        };
        this.openQuoteModal = () => {
            this.weather != 'none' ? this.generalRedirect.present() : this.quoteModal.present();
        };
        this.openClaimModal = () => {
            this.claimModal.present();
        };
    }
    componentDidLoad() {
        let modals = this.el.querySelectorAll('pro-modal');
        this.claimModal = modals.item(0);
        this.quoteModal = modals.item(1);
        this.thanksModal = modals.item(2);
        this.oopsModal = modals.item(3);
        this.generalRedirect = modals.item(4);
        this.progQuestion = modals.item(5);
        this.header = document.querySelector('h1');
    }
    makeAPIcall() {
        if (this.weather == '') {
            if (this.city != null) {
                checkForBadWeatherByCity(this.city).then((value) => {
                    this.weather = value;
                }).catch((er) => {
                    console.warn(er);
                    this.oopsModal.present();
                });
            }
            else {
                checkForBadWeatherByBrowser().then((value) => {
                    this.weather = value;
                }).catch(er => {
                    console.warn(er);
                    this.oopsModal.present();
                });
            }
        }
    }
    reset() {
        window.location.reload();
    }
    onCloseClaim() {
        this.claimModal.dismiss();
        this.thanksModal.present();
    }
    onCloseQuote() {
        this.quoteModal.dismiss();
        this.thanksModal.present();
    }
    onCloseThanks() {
        this.thanksModal.dismiss();
        this.reset();
    }
    onCloseOops() {
        this.oopsModal.dismiss();
        this.reset();
    }
    onChangeWeather(event) {
        this.weather = event.detail.weather;
        this.header.style.color = 'rgba(38, 58, 60, 1)';
    }
    onIsCustomer(event) {
        this.isCustomer = event.detail.response;
        if (this.weather == 'none') {
            this.quoteModal.present();
        }
        else if (this.weather) {
            this.isCustomer ? this.claimModal.present() : this.generalRedirect.present();
        }
    }
    onLocationChange(ev) {
        ev.detail ? this.city = ev.detail.city.value : this.city = null;
        this.makeAPIcall();
    }
    onWeatherButtonClick() {
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
    }
    changeWeatherBackground(event) {
        if (event.detail == 'none') {
            this.header.style.color = 'rgba(252, 213, 129, 1)';
        }
        else {
            this.header.style.color = 'rgba(38, 58, 60, 1)';
        }
    }
    render() {
        return (h(Host, null, h("pro-header", { onClick: () => this.reset() }, h("ion-toolbar", null, h("h1", { id: "main-header" }, "Home"), (this.weather == '') ?
            h("div", null)
            :
                h("img", { id: "home", src: "../assets/icon/house.png" }))), h("div", null, h("pro-grid", null, (this.weather == '') ?
            h("div", null, h("pro-row", null, h("pro-col", null, h("welcome-card", null))), h("pro-row", null, h("pro-col", null, h("location-card", null))))
            :
                h("pro-row", null, h("pro-col", null, h("weather-card", { history: this.weather }))), h("pro-row", null, h("pro-col", null, h("default-links", null))))), h("ion-footer", null, h("ion-toolbar", null, "\u00A0 Powered By ", h("a", { href: "https://darksky.net/dev" }, "Dark Sky API"))), h("div", { class: "modal-container" }, h("claim-form", null), h("quote-form", null), h("thanks-modal", null), h("oops-modal", null), h("general-redirect", null), h("prog-cust-question", null))));
    }
    get el() { return getElement(this); }
    static get style() { return "#main-header {\n  cursor: pointer;\n  color: rgba(252, 213, 129, 1);\n}\n\ndiv {\n  overflow: auto;\n}\n\ndiv.modal-container {\n  height: 0px;\n}\n\nion-toolbar {\n  color: rgba(252, 213, 129, 1);\n  font-weight: bolder;\n}\n\npro-footer {\n  font-family: \'Raleway\', Helvetica, sans-serif;\n}\n\nimg {\n  width: 100px;\n}\n\n#home {\n  width: 25px;\n  height: 20px;\n  position: absolute;\n  left: 20px;\n  top: 33px;\n}"; }
}

export { AppHome as app_home };
