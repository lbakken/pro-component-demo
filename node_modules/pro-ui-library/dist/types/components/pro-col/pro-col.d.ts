import { ComponentInterface } from '../../stencil.core';
export declare class ProCol implements ComponentInterface {
    el: any;
    win: Window;
    offset?: string;
    offsetXs?: string;
    offsetSm?: string;
    offsetMd?: string;
    offsetLg?: string;
    offsetXl?: string;
    pull?: string;
    pullXs?: string;
    pullSm?: string;
    pullMd?: string;
    pullLg?: string;
    pullXl?: string;
    push?: string;
    pushXs?: string;
    pushSm?: string;
    pushMd?: string;
    pushLg?: string;
    pushXl?: string;
    size?: string;
    sizeXs?: string;
    sizeSm?: string;
    sizeMd?: string;
    sizeLg?: string;
    sizeXl?: string;
    onResize(): void;
    private getColumns;
    private calculateSize;
    private calculatePosition;
    private calculateOffset;
    private calculatePull;
    private calculatePush;
    hostData(): {
        style: {
            'flex': string;
            'width': string;
            'max-width': string;
        };
    };
    render(): any;
}
