System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var ProImage = /** @class */ (function () {
                function ProImage(hostRef) {
                    registerInstance(this, hostRef);
                }
                // @Watch() src
                ProImage.prototype.render = function () {
                    return (h("img", { src: this.src, alt: this.alt, decoding: "async" }));
                };
                Object.defineProperty(ProImage, "style", {
                    get: function () { return ":host {\n  display: block;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n:host img {\n  display: block;\n  min-width: 50px;\n  min-height: 50px;\n  max-width: 150px;\n  max-height: 150px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: inherit;\n  object-fit: inherit;\n  -o-object-position: inherit;\n  object-position: inherit;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ProImage;
            }());
            exports('pro_image', ProImage);
        }
    };
});
