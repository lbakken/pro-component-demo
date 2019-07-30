export declare class ProRadioGroup {
    private selects;
    el: HTMLElement;
    name: string;
    value: string;
    onRadioDidLoad(ev: Event): void;
    onRadioDidUnload(ev: Event): void;
    onSelect(ev: Event): void;
    onDeselect(ev: Event): void;
    componentDidLoad(): void;
    private updateRadios;
    render(): any;
}
