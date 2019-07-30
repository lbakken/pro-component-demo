import { h } from '@stencil/core';
export class ProContent {
    render() {
        return (h("slot", null));
    }
    static get is() { return "pro-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-content.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-content.css"]
    }; }
}
