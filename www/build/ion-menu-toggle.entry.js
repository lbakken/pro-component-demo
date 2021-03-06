import { r as registerInstance, f as getIonMode, h, H as Host } from './chunk-91927964.js';
import { u as updateVisibility, t as toggleMenu } from './chunk-46ad7ae9.js';

class MenuToggle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.setVisibility = async () => {
            this.visible = await updateVisibility(this.menu);
        };
        this.onClick = async () => {
            await toggleMenu(this.menu);
        };
    }
    async componentDidLoad() {
        await this.setVisibility();
    }
    async visibilityChanged() {
        await this.setVisibility();
    }
    render() {
        const mode = getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, h("slot", null)));
    }
    static get style() { return ":host(.menu-toggle-hidden) {\n  display: none;\n}"; }
}

export { MenuToggle as ion_menu_toggle };
