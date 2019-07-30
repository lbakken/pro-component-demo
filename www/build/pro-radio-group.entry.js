import { r as registerInstance, h, c as getElement } from './chunk-91927964.js';

class ProRadioGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selects = [];
    }
    onRadioDidLoad(ev) {
        const select = ev.target;
        select.name = this.name;
        this.selects.push(select);
        this.updateRadios();
    }
    onRadioDidUnload(ev) {
        const index = this.selects.indexOf(ev.target);
        if (index > -1) {
            this.selects.splice(index, 1);
        }
    }
    onSelect(ev) {
        const selectedRadio = ev.target;
        if (selectedRadio) {
            selectedRadio.checked = true;
            this.value = selectedRadio.value;
        }
        this.updateRadios();
    }
    onDeselect(ev) {
        const selectedRadio = ev.target;
        if (selectedRadio) {
            selectedRadio.checked = false;
            this.value = undefined;
        }
        this.updateRadios();
    }
    componentDidLoad() {
        this.updateRadios();
    }
    updateRadios() {
        const value = this.value;
        let hasChecked = false;
        for (const select of this.selects) {
            if (!hasChecked && select.value === value) {
                hasChecked = true;
                select.checked = true;
            }
            else {
                select.checked = false;
            }
        }
    }
    render() {
        return h("slot", null);
    }
    get el() { return getElement(this); }
    static get style() { return ""; }
}

export { ProRadioGroup as pro_radio_group };
