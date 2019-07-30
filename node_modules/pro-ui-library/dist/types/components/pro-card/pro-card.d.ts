export declare class ProCard {
    win: Window;
    button: boolean;
    type: 'submit' | 'reset' | 'button';
    disabled: boolean;
    href: string | undefined;
    rel: string | undefined;
    target: string | undefined;
    private isClickable;
    hostData(): {
        class: {
            'card-disabled': boolean;
            'ion-activatable': boolean;
        };
    };
    render(): any;
}
