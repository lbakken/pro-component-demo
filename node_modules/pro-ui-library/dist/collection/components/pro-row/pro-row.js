import { h } from '@stencil/core';
export class ProRow {
    render() {
        return (h("slot", null));
    }
    static get is() { return "pro-row"; }
    static get originalStyleUrls() { return {
        "$": ["pro-row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-row.css"]
    }; }
}
