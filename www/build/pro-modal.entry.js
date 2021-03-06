import { r as registerInstance, h, H as Host, c as getElement } from './chunk-91927964.js';

class ProModal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.presented = false;
    }
    async present() {
        if (!this.presented)
            this.presented = true;
    }
    async dismiss() {
        if (this.presented)
            this.presented = false;
    }
    render() {
        return (this.presented) ? (h(Host, null, h("pro-backdrop", { onClick: () => this.dismiss() }), h("div", { class: "modal-window" }, h("div", { class: "modal-content" }, h("slot", null))))) : (h(Host, null));
    }
    get el() { return getElement(this); }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nh2 {\n  font-size: 28px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n}\n\np {\n  font-size: 16px;\n}\n\n.good-weather {\n  background: #fcd581;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#fcd581), color-stop(65%, #fdfffc));\n  background-image: linear-gradient(0deg, #fcd581 0%, #fdfffc 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #0a0908;\n}\n\n.bad-weather {\n  background: #0a0908;\n  background: -webkit-gradient(linear, left bottom, left top, from(#0a0908), color-stop(65%, #263a3c));\n  background: linear-gradient(0deg, #0a0908 0%, #263a3c 65%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100%;\n  color: #fdfffc;\n}\n\nhtml {\n  font-family: \"Raleway\", \"Helvetica\", sans-serif;\n  font-size: 100%;\n  background-color: #fdfffc;\n  color: #0a0908;\n  height: 100%;\n  width: 100%;\n}\n\n#body {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n:host {\n  width: 100%;\n}\n\n\@media only screen and (max-width: 600px) {\n  pro-modal {\n    width: 50%;\n    height: 50%;\n  }\n}\n:host .modal-window {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 2%;\n  bottom: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  z-index: 15;\n  background: #fdfffc;\n  border-radius: 25px;\n  width: 80%;\n  min-height: 40%;\n  max-height: 60%;\n  padding: 30px;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\@media only screen and (max-width: 600px) {\n  :host .modal-window {\n    width: 80%;\n    min-height: 50%;\n  }\n}\n\@media only screen and (min-width: 600px) {\n  :host .modal-window {\n    width: 80%;\n    min-height: 50%;\n  }\n}\n:host .modal-content {\n  width: 100%;\n  height: 100%;\n}"; }
}

export { ProModal as pro_modal };
