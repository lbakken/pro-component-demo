import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-91927964.js';

class LocationCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.city = '';
        this.location = createEvent(this, "location", 7);
    }
    handleSubmit() {
        this.location.emit({ city: this.city });
    }
    handleLocation() {
        this.location.emit();
    }
    onInputChange(ev) {
        this.city = ev.detail;
    }
    render() {
        return (h("pro-card", null, h("pro-grid", null, h("pro-row", { class: "extra-space" }, h("pro-col", { size: "8" }, h("pro-input", { placeholder: "Enter City . . .", label: "City" })), h("pro-col", { size: "4", class: "extra-space" }, h("pro-button", { onClick: () => this.handleSubmit() }, "Submit"))), h("pro-row", { class: "extra-space" }, h("pro-col", { size: "12" }, h("img", { id: "location", onClick: () => this.handleLocation(), src: "https://img.icons8.com/material/24/000000/worldwide-location.png" }), h("pro-label", { onClick: () => this.handleLocation(), for: "location", class: "location-text" }, "Use my current location"))))));
    }
    get el() { return getElement(this); }
    static get style() { return ".extra-space {\n  margin-top: 15px;\n}\n\na:hover {\n  cursor: pointer;\n}\n\n.location-text {\n  cursor: pointer;\n}\n\n#location {\n  float: left;\n  width: 18px;\n  height: 18px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n\@media only screen and (min-width: 400px) {\n  #location-text {\n    font-size: 20px;\n  }\n\n  #location {\n    width: 20px;\n    height: 20px;\n  }\n\n}"; }
}

export { LocationCard as location_card };
