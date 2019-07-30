System.register(['./chunk-5603b3cb.system.js', './chunk-17730780.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host, openURL, createColorClasses;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.f;
                h = module.h;
                Host = module.H;
            }, function (module) {
                openURL = module.o;
                createColorClasses = module.c;
            }],
        execute: function () {
            var RouterLink = /** @class */ (function () {
                function RouterLink(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                    this.onClick = function (ev) {
                        openURL(_this.href, ev, _this.routerDirection);
                    };
                }
                RouterLink.prototype.render = function () {
                    var _a;
                    var mode = getIonMode(this);
                    var attrs = {
                        href: this.href,
                        rel: this.rel,
                        target: this.target
                    };
                    return (h(Host, { onClick: this.onClick, class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, h("a", Object.assign({}, attrs), h("slot", null))));
                };
                Object.defineProperty(RouterLink, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --background: Background of the router link\n   * \@prop --color: Text color of the router link\n   */\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n  background: var(--background);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\na {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return RouterLink;
            }());
            exports('ion_router_link', RouterLink);
        }
    };
});
