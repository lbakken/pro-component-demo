import { EventEmitter } from '../../stencil.core';
export declare class ProCheckbox {
    el: HTMLElement;
    name: string;
    value: any | null;
    disabled: boolean;
    checked: boolean;
    proChange: EventEmitter<any>;
    proStyle: EventEmitter<any>;
    componentWillLoad(): void;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(): void;
    private emitStyle;
    private onClick;
    render(): any;
}
