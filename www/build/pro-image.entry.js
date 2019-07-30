import { r as registerInstance, h } from './chunk-91927964.js';

class ProImage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // @Watch() src
    render() {
        return (h("img", { src: this.src, alt: this.alt, decoding: "async" }));
    }
    static get style() { return ":host {\n  display: block;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n:host img {\n  display: block;\n  min-width: 50px;\n  min-height: 50px;\n  max-width: 150px;\n  max-height: 150px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: inherit;\n  object-fit: inherit;\n  -o-object-position: inherit;\n  object-position: inherit;\n}"; }
}

export { ProImage as pro_image };
