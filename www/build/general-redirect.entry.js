import { r as registerInstance, h } from './chunk-91927964.js';

class GeneralRedirect {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("pro-modal", null, h("pro-content", null, h("h1", null, "Thank You For Your Interest!"), h("p", null, "Unfortunately, due to recent weather in your area, we are unable to offer you a quote at this time. Please follow the link below to check with another provider."), h("a", { href: "https://www.thegeneral.com/" }, h("pro-button", null, "Get Another Quote")))));
    }
    static get style() { return "h1 {\n  text-align: center;\n}"; }
}

export { GeneralRedirect as general_redirect };
