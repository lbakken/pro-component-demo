import { h } from '@stencil/core';
export class ProRadio {
    constructor() {
        this.name = 'default-radio-name';
        this.disabled = false;
        this.checked = false;
        this.onClick = () => {
            if (this.checked) {
                this.proDeselect.emit();
            }
            else {
                this.checked = true;
            }
        };
    }
    nameChanged() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        if (isChecked) {
            this.proSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    }
    disabledChanged() {
        this.emitStyle();
    }
    componentWillLoad() {
        this.emitStyle();
    }
    componentDidLoad() {
        this.proRadioDidLoad.emit();
    }
    componentDidUnload() {
        this.proRadioDidUnload.emit();
    }
    emitStyle() {
        this.proStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
            'radio-value': this.value
        });
    }
    /* <Host
                    onClick={this.onClick}
                    role="radio"
                    class={{
                        'radio-checked': this.checked,
                        'radio-disabled': this.disabled
                    }}
                >
                    <div class="radio-icon">
                        <div class="radio-inner" />
                    </div>
                    <button
                        type="button"
                        disabled={this.disabled}
                    >
                    </button>
                </Host> */
    render() {
        return (h("input", { type: "radio", onClick: this.onClick, name: this.name, value: this.value, checked: this.checked }));
    }
    static get is() { return "pro-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-radio.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-radio.css"]
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
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'default-radio-name'"
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
            "method": "proRadioDidLoad",
            "name": "proRadioDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "proRadioDidUnload",
            "name": "proRadioDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "proSelect",
            "name": "proSelect",
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
            "method": "proDeselect",
            "name": "proDeselect",
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
            "propName": "name",
            "methodName": "nameChanged"
        }, {
            "propName": "checked",
            "methodName": "checkedChanged"
        }, {
            "propName": "disabled",
            "methodName": "disabledChanged"
        }]; }
}
