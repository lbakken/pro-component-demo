System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            exports({
                m: matchBreakpoint,
                n: now
            });
            var SIZE_TO_MEDIA = {
                'xs': '(min-width: 0px)',
                'sm': '(min-width: 576px)',
                'md': '(min-width: 768px)',
                'lg': '(min-width: 992px)',
                'xl': '(min-width: 1200px)',
            };
            function matchBreakpoint(win, breakpoint) {
                if (breakpoint === undefined || breakpoint === '') {
                    return true;
                }
                if (win.matchMedia) {
                    var mediaQuery = SIZE_TO_MEDIA[breakpoint];
                    return win.matchMedia(mediaQuery).matches;
                }
                return false;
            }
            function now(ev) {
                return ev.timeStamp || Date.now();
            }
        }
    };
});
