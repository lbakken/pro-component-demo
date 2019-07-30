import { Component, h, Event, EventEmitter, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'quote-form',
  styleUrl: 'quote-form.css'
})
export class QuoteForm {

  @Element() el: HTMLElement;

  @Event() closeQuote: EventEmitter;
  handleSubmit(ev: Event) {
    ev.preventDefault();
    this.closeQuote.emit();
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
          <h1>Get a Quote</h1>
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
                <pro-col size="12">
                  <pro-input placeholder="email" regex={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} label="Email" required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="4">
                  <pro-input placeholder="Car" regex={/^([^0-9]*)$/} label="Car" required={true} />
                </pro-col>
                <pro-col size="4">
                  <pro-input placeholder="Make" regex={/^([^0-9]*)$/} label="Make" required={true} />
                </pro-col>
                <pro-col size="4">
                  <pro-input placeholder="Model" label="Model" required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="6">
                  <pro-input placeholder="Year" regex={/^[0-9]{4}$/} label="Year" required={true} />
                </pro-col>
                <pro-col size="6">
                  <pro-input placeholder="Age" regex={/^([0-9]+)$/} label="Age" required={true} />
                </pro-col>
              </pro-row>
              <pro-row>
                <pro-col size="12" id="quote-button">
                  <pro-button type="submit" disabled={this.submitButton}>Submit</pro-button>
                </pro-col>
              </pro-row>
            </pro-grid>
          </form>
        </pro-content>
      </pro-modal>
    );
  }
}