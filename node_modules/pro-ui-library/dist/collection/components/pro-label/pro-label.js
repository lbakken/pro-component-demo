import { h } from '@stencil/core';
export class ProLabel {
    render() {
        return (h("label", { htmlfor: this.for },
            h("slot", null)));
    }
    static get is() { return "pro-label"; }
    static get originalStyleUrls() { return {
        "$": ["pro-label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-label.css"]
    }; }
    static get properties() { return {
        "for": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "for",
            "reflect": false
        }
    }; }
}
