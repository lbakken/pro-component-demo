import { h } from '@stencil/core';
export class ProButton {
    constructor() {
        this.type = 'button';
        this.disabled = false;
        this.handleClick = (ev) => {
            const form = this.el.closest('form');
            if (form) {
                ev.preventDefault();
                const fakeButton = document.createElement('button');
                fakeButton.type = this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        };
    }
    render() {
        return (h("button", { class: "button-native", disabled: this.disabled, type: this.type, onClick: this.handleClick },
            h("span", { class: "button-inner" },
                h("slot", { name: "icon-only" }),
                h("slot", { name: "start" }),
                h("slot", null),
                h("slot", { name: "end" }))));
    }
    static get is() { return "pro-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-button.css"]
    }; }
    static get properties() { return {
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | undefined",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "href",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'submit' | 'reset' | 'button'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
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
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "el"; }
}
