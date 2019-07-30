System.register(['./chunk-5603b3cb.system.js'], function (exports) {
    'use strict';
    var readTask, writeTask;
    return {
        setters: [function (module) {
                readTask = module.j;
                writeTask = module.w;
            }],
        execute: function () {
            var startStatusTap = exports('startStatusTap', function () {
                var win = window;
                win.addEventListener('statusTap', function () {
                    readTask(function () {
                        var width = win.innerWidth;
                        var height = win.innerHeight;
                        var el = document.elementFromPoint(width / 2, height / 2);
                        if (!el) {
                            return;
                        }
                        var contentEl = el.closest('ion-content');
                        if (contentEl) {
                            contentEl.componentOnReady().then(function () {
                                writeTask(function () { return contentEl.scrollToTop(300); });
                            });
                        }
                    });
                });
            });
        }
    };
});
