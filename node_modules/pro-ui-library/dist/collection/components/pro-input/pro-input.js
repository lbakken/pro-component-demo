import { h, Host } from '@stencil/core';
export class ProInput {
    constructor() {
        this.regex = /^(.+)$/;
        this.required = false;
    }
    componentWillLoad() {
        if (this.required) {
            this.reqLabel = 'required';
        }
    }
    onInputChange(ev) {
        const value = ev.target.value;
        let validated = false;
        if (value != '') {
            (this.required) ? validated = this.regex.test(value) : validated = true;
            validated ? this.class = 'valid' : this.class = 'invalid';
        }
        else {
            validated = !this.required;
            validated ? this.class = '' : this.class = 'invalid';
        }
        this.inputChange.emit({
            name: this.label,
            value: value,
            valid: validated
        });
    }
    render() {
        return (h(Host, null,
            h("label", { htmlFor: this.label, class: this.reqLabel }, this.label),
            h("input", { onChange: (ev) => this.onInputChange(ev), name: this.label, placeholder: this.placeholder, id: this.label, class: this.class })));
    }
    static get is() { return "pro-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-input.css"]
    }; }
    static get properties() { return {
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "regex": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "RegExp",
                "resolved": "RegExp",
                "references": {
                    "RegExp": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "/^(.+)$/"
        },
        "label": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "required": {
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
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "class": {},
        "reqLabel": {}
    }; }
    static get events() { return [{
            "method": "inputChange",
            "name": "inputChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
