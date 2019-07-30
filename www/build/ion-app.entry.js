import { r as registerInstance, e as config, i as isPlatform, f as getIonMode, c as getElement, h, H as Host } from './chunk-91927964.js';
import { r as rIC } from './chunk-77d6cde3.js';

class App {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        rIC(() => {
            if (!config.getBoolean('_testing')) {
                __sc_import_app('./tap-click-e643d3cf.js').then(module => module.startTapClick(config));
            }
            if (config.getBoolean('statusTap', isPlatform(window, 'hybrid'))) {
                __sc_import_app('./status-tap-7610bad7.js').then(module => module.startStatusTap());
            }
            if (config.getBoolean('inputShims', needInputShims())) {
                __sc_import_app('./input-shims-1f378cad.js').then(module => module.startInputShims(config));
            }
            __sc_import_app('./focus-visible-30ddc1ea.js').then(module => module.startFocusVisible());
        });
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': config.getBoolean('_forceStatusbarPadding')
            }
        };
    }
    get el() { return getElement(this); }
    render() { return h(Host, this.hostData()); }
    static get style() { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px;\n}"; }
}
const needInputShims = () => {
    return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
};

export { App as ion_app };
