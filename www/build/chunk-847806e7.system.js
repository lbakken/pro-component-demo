System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            /**
             * Check to see if the Haptic Plugin is available
             * @return Returns `true` or false if the plugin is available
             */
            var hapticAvailable = function () {
                var engine = window.TapticEngine;
                return !!engine;
            };
            /**
             * Trigger a selection changed haptic event. Good for one-time events
             * (not for gestures)
             */
            var hapticSelection = exports('c', function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.selection();
                }
            });
            /**
             * Tell the haptic engine that a gesture for a selection change is starting.
             */
            var hapticSelectionStart = exports('a', function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionStart();
                }
            });
            /**
             * Tell the haptic engine that a selection changed during a gesture.
             */
            var hapticSelectionChanged = exports('h', function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionChanged();
                }
            });
            /**
             * Tell the haptic engine we are done with a gesture. This needs to be
             * called lest resources are not properly recycled.
             */
            var hapticSelectionEnd = exports('b', function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionEnd();
                }
            });
            /**
             * Use this to indicate success/failure/warning to the user.
             * options should be of the type `{ type: 'success' }` (or `warning`/`error`)
             */
            var hapticNotification = function (options) {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.notification(options);
                }
            };
            /**
             * Use this to indicate success/failure/warning to the user.
             * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
             */
            var hapticImpact = function (options) {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.impact(options);
                }
            };
        }
    };
});
