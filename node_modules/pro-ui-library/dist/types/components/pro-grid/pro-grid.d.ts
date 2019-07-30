import { ComponentInterface } from '../../stencil.core';
export declare class ProGrid implements ComponentInterface {
    fixed: boolean;
    hostData(): {
        class: {
            'grid-fixed': boolean;
        };
    };
    render(): any;
}
