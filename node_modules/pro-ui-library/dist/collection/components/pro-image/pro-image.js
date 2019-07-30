import { h } from '@stencil/core';
export class ProImage {
    // @Watch() src
    render() {
        return (h("img", { src: this.src, alt: this.alt, decoding: "async" }));
    }
    static get is() { return "pro-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-image.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-image.css"]
    }; }
    static get properties() { return {
        "alt": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "alt",
            "reflect": false
        },
        "src": {
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
            "attribute": "src",
            "reflect": false
        }
    }; }
}
