import { h } from '@stencil/core';
export class ProGrid {
    constructor() {
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                'grid-fixed': this.fixed
            }
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "pro-grid"; }
    static get originalStyleUrls() { return {
        "$": ["pro-grid.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-grid.css"]
    }; }
    static get properties() { return {
        "fixed": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fixed",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
