import { r as registerInstance, h, H as Host } from './chunk-91927964.js';

class ProGrid {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                'grid-fixed': this.fixed
            }
        };
    }
    __stencil_render() {
        return (h("slot", null));
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return "pro-grid {\n  display: block;\n  -ms-flex: 1;\n  flex: 1;\n}"; }
}

export { ProGrid as pro_grid };
