import { h, Host } from '@stencil/core';
export class ProModal {
    constructor() {
        this.presented = false;
    }
    async present() {
        if (!this.presented)
            this.presented = true;
    }
    async dismiss() {
        if (this.presented)
            this.presented = false;
    }
    render() {
        return (this.presented) ? (h(Host, null,
            h("pro-backdrop", { onClick: () => this.dismiss() }),
            h("div", { class: "modal-window" },
                h("div", { class: "modal-content" },
                    h("slot", null))))) : (h(Host, null));
    }
    static get is() { return "pro-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-modal.css"]
    }; }
    static get states() { return {
        "presented": {}
    }; }
    static get methods() { return {
        "present": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "dismiss": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
