import { h } from '@stencil/core';
export class ProHeader {
    render() {
        return (h("slot", null));
    }
    static get is() { return "pro-header"; }
    static get originalStyleUrls() { return {
        "$": ["pro-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-header.css"]
    }; }
}
