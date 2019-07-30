
import { Component, h } from '@stencil/core';


@Component({
  tag: 'general-redirect',
  styleUrl: 'general-redirect.css'
})
export class GeneralRedirect {

  render() {
    return (
      <pro-modal>
        <pro-content>
          <h1>Thank You For Your Interest!</h1>
          <p>
            Unfortunately, due to recent weather in your area, we are unable to offer you a quote at this time.
            Please follow the link below to check with another provider.
        </p>
          <a href="https://www.thegeneral.com/"><pro-button>Get Another Quote</pro-button></a>
        </pro-content>
      </pro-modal>
    );
  }
}