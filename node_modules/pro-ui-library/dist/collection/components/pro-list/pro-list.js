import { h } from '@stencil/core';
export class ProList {
    render() {
        return h("slot", null);
    }
    static get is() { return "pro-list"; }
    static get originalStyleUrls() { return {
        "$": ["pro-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-list.css"]
    }; }
}
