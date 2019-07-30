import { h } from '@stencil/core';
export class ProCheckbox {
    constructor() {
        this.disabled = false;
        this.checked = false;
        this.onClick = () => {
            this.checked = !this.checked;
        };
    }
    componentWillLoad() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        this.proChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    disabledChanged() {
        this.emitStyle();
    }
    emitStyle() {
        this.proStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
            'checkbox-value': this.value
        });
    }
    render() {
        return h("input", { type: "checkbox", onClick: this.onClick });
    }
    static get is() { return "pro-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-checkbox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-checkbox.css"]
    }; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": false
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any | null",
                "resolved": "any",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "checked": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "proChange",
            "name": "proChange",
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
        }, {
            "method": "proStyle",
            "name": "proStyle",
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
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "checkedChanged"
        }, {
            "propName": "disabled",
            "methodName": "disabledChanged"
        }]; }
}
