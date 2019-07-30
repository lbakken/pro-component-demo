import { h } from '@stencil/core';
export class ProFooter {
    render() {
        return h("slot", null);
    }
    static get is() { return "pro-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-footer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-footer.css"]
    }; }
}
