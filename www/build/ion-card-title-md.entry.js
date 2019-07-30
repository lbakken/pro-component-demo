import { r as registerInstance, f as getIonMode, h, H as Host } from './chunk-91927964.js';
import { c as createColorClasses } from './chunk-20d65ce5.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class CardTitle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { [mode]: true }),
            'role': 'heading',
            'aria-level': '2'
        };
    }
    __stencil_render() {
        return h("slot", null);
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the card title\n   */\n  display: block;\n  position: relative;\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n:host {\n  --color: var(--ion-color-step-850, #262626);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.2;\n}"; }
}

export { CardTitle as ion_card_title };
