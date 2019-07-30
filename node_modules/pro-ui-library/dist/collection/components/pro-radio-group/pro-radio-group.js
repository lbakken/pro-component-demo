import { h } from '@stencil/core';
export class ProRadioGroup {
    constructor() {
        this.selects = [];
    }
    onRadioDidLoad(ev) {
        const select = ev.target;
        select.name = this.name;
        this.selects.push(select);
        this.updateRadios();
    }
    onRadioDidUnload(ev) {
        const index = this.selects.indexOf(ev.target);
        if (index > -1) {
            this.selects.splice(index, 1);
        }
    }
    onSelect(ev) {
        const selectedRadio = ev.target;
        if (selectedRadio) {
            selectedRadio.checked = true;
            this.value = selectedRadio.value;
        }
        this.updateRadios();
    }
    onDeselect(ev) {
        const selectedRadio = ev.target;
        if (selectedRadio) {
            selectedRadio.checked = false;
            this.value = undefined;
        }
        this.updateRadios();
    }
    componentDidLoad() {
        this.updateRadios();
    }
    updateRadios() {
        const value = this.value;
        let hasChecked = false;
        for (const select of this.selects) {
            if (!hasChecked && select.value === value) {
                hasChecked = true;
                select.checked = true;
            }
            else {
                select.checked = false;
            }
        }
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "pro-radio-group"; }
    static get originalStyleUrls() { return {
        "$": ["pro-radio-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-radio-group.css"]
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
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "proRadioDidLoad",
            "method": "onRadioDidLoad",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "proRadioDidUnload",
            "method": "onRadioDidUnload",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "proSelect",
            "method": "onSelect",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "proDeselect",
            "method": "onDeselect",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
