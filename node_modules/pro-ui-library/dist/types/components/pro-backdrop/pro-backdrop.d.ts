import { EventEmitter, ComponentInterface } from '../../stencil.core';
export declare class ProBackdrop implements ComponentInterface {
    private lastClick;
    visible: boolean;
    tappable: boolean;
    ionBackdropTap: EventEmitter<void>;
    protected onTouchStart(ev: TouchEvent): void;
    protected onMouseDown(ev: TouchEvent): void;
    private emitTap;
    hostData(): {
        tabindex: string;
        class: {
            'backdrop-hide': boolean;
            'backdrop-no-tappable': boolean;
        };
    };
}
