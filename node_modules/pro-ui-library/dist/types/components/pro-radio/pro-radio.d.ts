import { EventEmitter } from '../../stencil.core';
export declare class ProRadio {
    el: HTMLElement;
    name: string;
    value: any | null;
    disabled: boolean;
    checked: boolean;
    proRadioDidLoad: EventEmitter<void>;
    proRadioDidUnload: EventEmitter<void>;
    proSelect: EventEmitter<any>;
    proDeselect: EventEmitter<any>;
    proStyle: EventEmitter<any>;
    nameChanged(): void;
    checkedChanged(isChecked: boolean): void;
    disabledChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private emitStyle;
    private onClick;
    render(): any;
}
