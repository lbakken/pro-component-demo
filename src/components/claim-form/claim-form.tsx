
import { Component, h, Element, Event, EventEmitter, Listen, State } from '@stencil/core';

@Component({
  tag: 'claim-form',
  styleUrl: 'claim-form.css'
})
export class ClaimForm {

  @Element() el: HTMLElement;

  @Event() closeClaim: EventEmitter;
  handleSubmit(ev: Event) {
    ev.preventDefault();
    this.closeClaim.emit();
  }

  @State() submitButton: boolean = true;
  private valid: NodeListOf<HTMLProInputElement>;
  private isValid: Array<boolean>;

  componentDidLoad() {
    this.valid = this.el.querySelectorAll('pro-input');
    this.isValid = new Array(this.valid.length);
    for (var i = 0; i < this.valid.length; i++) {
      this.isValid[i] = !this.valid.item(i).required;
    }
  }

  private validate() {
    var valid: boolean = true;
    this.isValid.forEach((isVal) => {
      valid = valid && isVal;
    })
    this.submitButton = !valid;
    return valid;
  }

  @Listen('inputChange')
  onInputChange(ev: CustomEvent) {
    for (var i = 0; i < this.valid.length; i++) {
      if (this.valid.item(i).shadowRoot.querySelector('input').name == ev.detail.name) {
        this.isValid[i] = ev.detail.valid;
      }
    }
    this.validate();
  }

  render() {
    return (
      <pro-modal>
        <pro-content>
          <h1>File a Claim</h1>
          <form onSubmit={(ev) => this.handleSubmit(ev)}>
            <pro-grid>
              <pro-row>
                <pro-col size="6">
                  <pro-input placeholder="firstName" regex={/^([^0-9]*)$/} label="First Name" required={true} />
                </pro-col>
                <pro-col size="6">
                  <pro-input placeholder="lastName" regex={/^([^0-9]*)$/} label="Last Name" required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="7">
                  <pro-input placeholder="Email" regex={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} label="Email" required={true} />
                </pro-col>
                <pro-col size="5">
                  <pro-input placeholder="Policy Number" regex={/^[0-9]{10}$/} label="Policy Number" required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="6">
                  <pro-input placeholder="Address 1" label="Address 1" required={true} />
                </pro-col>
                <pro-col size="6">
                  <pro-input placeholder="Address 2" label="Address 2" />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="4">
                  <pro-input placeholder="City" label="City" required={true} />
                </pro-col>
                <pro-col size="4">
                  <pro-input placeholder="State" label="State" regex={/^[A-Z]{2}$/} required={true} />
                </pro-col>
                <pro-col size="4">
                  <pro-input placeholder="Zip" label="Zip" regex={/^[0-9]{5}$/} required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="6">
                  <pro-input placeholder="Date" label="Date of Incident" required={true} />
                </pro-col>
                <pro-col size="6">
                  <pro-input placeholder="Time" label="Time of Incident" required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="12" id="quote-button">
                  <pro-button type="submit" disabled={this.submitButton} class='lower'>Submit</pro-button>
                </pro-col>
              </pro-row>
            </pro-grid>
          </form>
        </pro-content>
      </pro-modal>
    );
  }
}