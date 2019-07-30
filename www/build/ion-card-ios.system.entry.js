System.register(['./chunk-5603b3cb.system.js', './chunk-17730780.system.js'], function (exports) {
    'use strict';
    var registerInstance, getIonMode, h, Host, createColorClasses, openURL;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getIonMode = module.f;
                h = module.h;
                Host = module.H;
            }, function (module) {
                createColorClasses = module.c;
                openURL = module.o;
            }],
        execute: function () {
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Card = /** @class */ (function () {
                function Card(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * If `true`, a button tag will be rendered and the card will be tappable.
                     */
                    this.button = false;
                    /**
                     * The type of the button. Only used when an `onclick` or `button` property is present.
                     */
                    this.type = 'button';
                    /**
                     * If `true`, the user cannot interact with the card.
                     */
                    this.disabled = false;
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                }
                Card.prototype.isClickable = function () {
                    return (this.href !== undefined || this.button);
                };
                Card.prototype.hostData = function () {
                    var _a;
                    var mode = getIonMode(this);
                    return {
                        class: Object.assign((_a = {}, _a[mode] = true, _a), createColorClasses(this.color), { 'card-disabled': this.disabled, 'ion-activatable': this.isClickable() })
                    };
                };
                Card.prototype.__stencil_render = function () {
                    var clickable = this.isClickable();
                    if (!clickable) {
                        return [
                            h("slot", null)
                        ];
                    }
                    var mode = getIonMode(this);
                    var _a = this, href = _a.href, routerDirection = _a.routerDirection;
                    var TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
                    var attrs = (TagType === 'button')
                        ? { type: this.type }
                        : {
                            download: this.download,
                            href: this.href,
                            rel: this.rel,
                            target: this.target
                        };
                    return (h(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled, onClick: function (ev) { return openURL(href, ev, routerDirection); } }), h("slot", null), clickable && mode === 'md' && h("ion-ripple-effect", null)));
                };
                Card.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Card, "style", {
                    get: function () { return ".sc-ion-card-ios-h {\n  \n  --ion-safe-area-left: 0px;\n  --ion-safe-area-right: 0px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden;\n}\n\n.ion-color.sc-ion-card-ios-h {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n.sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle  {\n  color: var(--ion-color-contrast);\n}\n\n.sc-ion-card-ios-s  img  {\n  display: block;\n  width: 100%;\n}\n\n.sc-ion-card-ios-s  ion-list  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.card-disabled.sc-ion-card-ios-h {\n  cursor: default;\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.card-native.sc-ion-card-ios {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: block;\n  width: 100%;\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n}\n\n.card-native.sc-ion-card-ios::-moz-focus-inner {\n  border: 0;\n}\n\nbutton.sc-ion-card-ios, a.sc-ion-card-ios {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n\nion-ripple-effect.sc-ion-card-ios {\n  color: var(--ripple-color);\n}\n\n.sc-ion-card-ios-h {\n  --background: var(--ion-item-background, transparent);\n  --color: var(--ion-color-step-600, #666666);\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 24px;\n  margin-bottom: 24px;\n  border-radius: 8px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);\n  transition: -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);\n  transition: transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);\n  transition: transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);\n  font-size: 14px;\n  -webkit-box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-card-ios-h {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 16px;\n    margin-inline-start: 16px;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}\n\n.activated.sc-ion-card-ios-h {\n  -webkit-transform: scale3d(0.97, 0.97, 1);\n  transform: scale3d(0.97, 0.97, 1);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Card;
            }());
            exports('ion_card', Card);
        }
    };
});
