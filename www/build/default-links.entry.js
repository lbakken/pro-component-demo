import { r as registerInstance, d as createEvent, h } from './chunk-91927964.js';

class DefaultLinks {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changeWeather = createEvent(this, "changeWeather", 7);
    }
    onChangeWeather(weather) {
        this.changeWeather.emit({ weather: weather });
    }
    render() {
        return (h("pro-card", null, h("pro-grid", null, h("pro-row", null, h("pro-col", null, h("h3", null, "Thank you for using our app!"))), h("pro-row", null, h("pro-col", null, h("p", null, "Want to see more?"), h("p", null, "Click on one of the links below to see what this page looks like during different weather events!"))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-button", { onClick: () => this.onChangeWeather('none') }, "Sunny Example"))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { onClick: () => this.onChangeWeather('wind') }, "Windy Example")), h("pro-col", { size: "6" }, h("pro-button", { onClick: () => this.onChangeWeather('thunderstorms') }, "Rain Example"))), h("pro-row", null, h("pro-col", { size: "6" }, h("pro-button", { onClick: () => this.onChangeWeather('hail') }, "Hail Example")), h("pro-col", { size: "6" }, h("pro-button", { onClick: () => this.onChangeWeather('snow') }, "Snow Example"))))));
    }
    static get style() { return ""; }
}

export { DefaultLinks as default_links };
