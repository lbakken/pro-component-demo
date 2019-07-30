import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-91927964.js';

class WeatherCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleSet = createEvent(this, "styleSet", 7);
        this.weatherButtonClick = createEvent(this, "weatherButtonClick", 7);
    }
    onHistoryChange(newValue) {
        this.history = newValue;
        this.updateInfo();
    }
    updateInfo() {
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
    }
    componentWillLoad() {
        this.updateInfo();
    }
    render() {
        return (h("pro-card", null, h("pro-content", null, h("h1", null, this.header), this.icon, h("h2", null, this.subHeader), h("pro-grid", null, h("pro-row", null, h("pro-col", null, h("p", null, this.body))), h("pro-row", null, h("pro-col", { size: "12" }, h("pro-button", { onClick: () => this.weatherButtonClick.emit() }, this.button)))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "history": ["onHistoryChange"]
    }; }
    static get style() { return "img {\n    width: 150px;\n    height: 100px;\n    display: block;\n    margin: auto;\n}\n\n.dark {\n    color: rgba(38, 58, 60, 1);\n}\n\n.sunny {\n    color: rgba(252, 213, 129, 1);\n}"; }
}

export { WeatherCard as weather_card };
