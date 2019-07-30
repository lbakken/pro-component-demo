System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            var rIC = exports('r', function (callback) {
                if ('requestIdleCallback' in window) {
                    window.requestIdleCallback(callback);
                }
                else {
                    setTimeout(callback, 32);
                }
            });
            var hasShadowDom = exports('h', function (el) {
                return !!el.shadowRoot && !!el.attachShadow;
            });
            var findItemLabel = exports('f', function (componentEl) {
                var itemEl = componentEl.closest('ion-item');
                if (itemEl) {
                    return itemEl.querySelector('ion-label');
                }
                return null;
            });
            var renderHiddenInput = exports('a', function (always, container, name, value, disabled) {
                if (always || hasShadowDom(container)) {
                    var input = container.querySelector('input.aux-input');
                    if (!input) {
                        input = container.ownerDocument.createElement('input');
                        input.type = 'hidden';
                        input.classList.add('aux-input');
                        container.appendChild(input);
                    }
                    input.disabled = disabled;
                    input.name = name;
                    input.value = value || '';
                }
            });
            var clamp = exports('c', function (min, n, max) {
                return Math.max(min, Math.min(n, max));
            });
            var assert = exports('b', function (actual, reason) {
                if (!actual) {
                    var message = 'ASSERT: ' + reason;
                    console.error(message);
                    debugger; // tslint:disable-line
                    throw new Error(message);
                }
            });
            var now = exports('n', function (ev) {
                return ev.timeStamp || Date.now();
            });
            var pointerCoord = exports('p', function (ev) {
                // get X coordinates for either a mouse click
                // or a touch depending on the given event
                if (ev) {
                    var changedTouches = ev.changedTouches;
                    if (changedTouches && changedTouches.length > 0) {
                        var touch = changedTouches[0];
                        return { x: touch.clientX, y: touch.clientY };
                    }
                    if (ev.pageX !== undefined) {
                        return { x: ev.pageX, y: ev.pageY };
                    }
                }
                return { x: 0, y: 0 };
            });
            /**
             * @hidden
             * Given a side, return if it should be on the end
             * based on the value of dir
             * @param side the side
             * @param isRTL whether the application dir is rtl
             */
            var isEndSide = exports('i', function (side) {
                var isRTL = document.dir === 'rtl';
                switch (side) {
                    case 'start': return isRTL;
                    case 'end': return !isRTL;
                    default:
                        throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
                }
            });
            var deferEvent = function (event) {
                return debounceEvent(event, 0);
            };
            var debounceEvent = exports('d', function (event, wait) {
                var original = event._original || event;
                return {
                    _original: event,
                    emit: debounce(original.emit.bind(original), wait)
                };
            });
            var debounce = exports('e', function (func, wait) {
                if (wait === void 0) { wait = 0; }
                var timer;
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    clearTimeout(timer);
                    timer = setTimeout.apply(void 0, [func, wait].concat(args));
                };
            });
        }
    };
});
