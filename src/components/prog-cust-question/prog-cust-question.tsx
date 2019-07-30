
import { Component, h, Element, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'prog-cust-question',
  styleUrl: 'prog-cust-question.css'
})
export class QuoteForm {

  @Element() el: HTMLElement;

  @Event() isCustomer: EventEmitter
  onIsCustomer(ans: boolean) {
    this.isCustomer.emit({ response: ans });
    this.el.querySelector('pro-modal').dismiss();
  }

  render() {
    return (
      <pro-modal>
        <pro-content>
          <h1 class="header">Are You A Returning Customer?</h1>
          <pro-grid class="header">
            <pro-row>
              <pro-col size="6">
                <pro-button onClick={() => this.onIsCustomer(true)}>YES</pro-button>
              </pro-col>
              <pro-col size="6">
                <pro-button onClick={() => this.onIsCustomer(false)}>NO</pro-button>
              </pro-col>
            </pro-row>
          </pro-grid>
        </pro-content>
      </pro-modal>
    );
  }
}