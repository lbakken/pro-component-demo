import { now } from '../../utils/utils';
export class ProBackdrop {
    constructor() {
        this.lastClick = -10000;
        this.visible = true;
        this.tappable = true;
    }
    onTouchStart(ev) {
        this.lastClick = now(ev);
        this.emitTap();
    }
    onMouseDown(ev) {
        if (this.lastClick < now(ev) - 2500) {
            this.emitTap();
        }
    }
    emitTap() {
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    hostData() {
        return {
            tabindex: '-1',
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            }
        };
    }
    static get is() { return "pro-backdrop"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pro-backdrop.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pro-backdrop.css"]
    }; }
    static get properties() { return {
        "visible": {
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
            "attribute": "visible",
            "reflect": false,
            "defaultValue": "true"
        },
        "tappable": {
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
            "attribute": "tappable",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "ionBackdropTap",
            "name": "ionBackdropTap",
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
        }]; }
    static get listeners() { return [{
            "name": "touchstart",
            "method": "onTouchStart",
            "target": undefined,
            "capture": true,
            "passive": false
        }, {
            "name": "click",
            "method": "onMouseDown",
            "target": undefined,
            "capture": true,
            "passive": false
        }, {
            "name": "mousedown",
            "method": "onMouseDown",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
