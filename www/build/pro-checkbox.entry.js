import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-91927964.js';

class ProCheckbox {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.checked = false;
        this.onClick = () => {
            this.checked = !this.checked;
        };
        this.proChange = createEvent(this, "proChange", 7);
        this.proStyle = createEvent(this, "proStyle", 7);
    }
    componentWillLoad() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        this.proChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    disabledChanged() {
        this.emitStyle();
    }
    emitStyle() {
        this.proStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
            'checkbox-value': this.value
        });
    }
    render() {
        return h("input", { type: "checkbox", onClick: this.onClick });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return "\@charset \"UTF-8\";\n\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\ninput[type=checkbox]:after {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  top: -2px;\n  left: -1px;\n  position: relative;\n  background-color: gainsboro;\n  content: \"\";\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n}\n\ninput[type=checkbox]:checked:after {\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  top: -2px;\n  left: -1px;\n  content: \"✔\";\n  position: relative;\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid white;\n  color: #30bced;\n  text-align: center;\n}\n\ninput[type=checkbox]:hover:after {\n  background: #1e96ff;\n  -webkit-transition: 1s;\n  transition: 1s;\n}"; }
}

export { ProCheckbox as pro_checkbox };
