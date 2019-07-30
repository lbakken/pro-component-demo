import { h } from '@stencil/core';
export class ProCard {
    constructor() {
        this.button = false;
        this.type = 'button';
        this.disabled = false;
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    hostData() {
        return {
            class: {
                'card-disabled': this.disabled,
                'ion-activatable': this.isClickable()
            }
        };
    }
    render() {
        const clickable = this.isClickable();
        if (!clickable) {
            return [
                h("slot", null)
            ];
        }
        const { href } = this;
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                href: this.href,
                rel: this.rel,
                target: this.target
            };
        return (h(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled }),
            h("slot", null),
            clickable && h("pro-ripple-effect", null)));
    }
    static get is() { return "pro-card"; }
    static get originalStyleUrls() { return {
        "$": ["pro-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-card.css"]
    }; }
    static get properties() { return {
        "button": {
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
            "attribute": "button",
            "reflect": false,
            "defaultValue": "false"
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
            "reflect": false,
            "defaultValue": "false"
        },
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
        "rel": {
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
            "attribute": "rel",
            "reflect": false
        },
        "target": {
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
            "attribute": "target",
            "reflect": false
        }
    }; }
    static get contextProps() { return [{
            "name": "win",
            "context": "window"
        }]; }
}
