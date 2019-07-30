import { r as registerInstance, n as getContext, h, c as getElement, H as Host } from './chunk-91927964.js';
import { m as matchBreakpoint } from './chunk-f1aa0d6e.js';

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
class ProCol {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.win = getContext(this, "window");
    }
    onResize() {
        this.el.forceUpdate();
    }
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns('size');
        if (!columns || columns === '') {
            return;
        }
        const colSize = (columns === 'auto')
            ? 'auto'
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--pro-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + '%';
        return {
            'flex': `0 0 ${colSize}`,
            'width': `${colSize}`,
            'max-width': `${colSize}`
        };
    }
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--pro-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
        return {
            [modifier]: amount
        };
    }
    calculateOffset(isRTL) {
        return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
    }
    calculatePull(isRTL) {
        return this.calculatePosition('pull', isRTL ? 'left' : 'right');
    }
    calculatePush(isRTL) {
        return this.calculatePosition('push', isRTL ? 'right' : 'left');
    }
    hostData() {
        const isRTL = this.win.document.dir === 'rtl';
        return {
            style: Object.assign({}, this.calculateOffset(isRTL), this.calculatePull(isRTL), this.calculatePush(isRTL), this.calculateSize())
        };
    }
    __stencil_render() {
        return h("slot", null);
    }
    get el() { return getElement(this); }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return "pro-col {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}"; }
}

export { ProCol as pro_col };
