import { EventEmitter } from '../../stencil.core';
export declare class ProInput {
    class: string;
    reqLabel: string;
    placeholder: string;
    regex: RegExp;
    label: string;
    required: boolean;
    componentWillLoad(): void;
    inputChange: EventEmitter;
    onInputChange(ev: any): void;
    render(): any;
}
