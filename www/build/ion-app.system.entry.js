System.register(['./chunk-5603b3cb.system.js', './chunk-05185aad.system.js'], function (exports, module) {
    'use strict';
    var registerInstance, config, isPlatform, getIonMode, getElement, h, Host, rIC;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                config = module.e;
                isPlatform = module.i;
                getIonMode = module.f;
                getElement = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                rIC = module.r;
            }],
        execute: function () {
            var App = /** @class */ (function () {
                function App(hostRef) {
                    registerInstance(this, hostRef);
                }
                App.prototype.componentDidLoad = function () {
                    rIC(function () {
                        if (!config.getBoolean('_testing')) {
                            module.import('./tap-click-8722f429.system.js').then(function (module) { return module.startTapClick(config); });
                        }
                        if (config.getBoolean('statusTap', isPlatform(window, 'hybrid'))) {
                            module.import('./status-tap-4d8be66f.system.js').then(function (module) { return module.startStatusTap(); });
                        }
                        if (config.getBoolean('inputShims', needInputShims())) {
                            module.import('./input-shims-dd60cb3e.system.js').then(function (module) { return module.startInputShims(config); });
                        }
                        module.import('./focus-visible-c541495d.system.js').then(function (module) { return module.startFocusVisible(); });
                    });
                };
                App.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: (_a = {},
                            _a[mode] = true,
                            _a['ion-page'] = true,
                            _a['force-statusbar-padding'] = config.getBoolean('_forceStatusbarPadding'),
                            _a)
                    };
                };
                Object.defineProperty(App.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                App.prototype.render = function () { return h(Host, this.hostData()); };
                Object.defineProperty(App, "style", {
                    get: function () { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return App;
            }());
            exports('ion_app', App);
            var needInputShims = function () {
                return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
            };
        }
    };
});
