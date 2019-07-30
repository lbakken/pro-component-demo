
import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'thanks-modal',
  styleUrl: 'thanks-modal.css'
})
export class ThanksModal {

  @Event() closeThanks: EventEmitter;

  render() {
    return (
      <pro-modal>
        <pro-content>
          <h1>Thank You for using our app!</h1>
          <pro-grid>
            <pro-row>
              <pro-col size="12">
                <p class="head">If you haven't had enough yet, click here to try another flow!</p>
                <pro-button onClick={() => this.closeThanks.emit()}>Do It Again!</pro-button>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col size="12">
                <h2>Want to learn more?</h2>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col>
                <p class="content">Checkout the links below explore our more technical references!</p>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col size="6">
                <a href="https://stenciljs.com/">
                  <pro-button>StencilJS Docs</pro-button>
                </a>
              </pro-col>
              <pro-col size="6">
                <a href="https://docs.google.com/document/d/1XOm4rwpCExhkX0VSr7b3bP8nKClNq-SvAevzkjQlGFU/edit?usp=sharing">
                  <pro-button>Our Docs</pro-button>
                </a>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col size="6">
                <a href="">
                  <pro-button>UI Library Code</pro-button>
                </a>
              </pro-col>
              <pro-col size="6">
                <a href="https://www.npmjs.com/package/pro-ui-library">
                  <pro-button>UI Library NPM</pro-button>
                </a>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col size="6">
                <a href="">
                  <pro-button>App Code</pro-button>
                </a>
              </pro-col>
              <pro-col size="6">
                <a href="https://heroku.com">
                  <pro-button>Heroku Hosting</pro-button>
                </a>
              </pro-col>
            </pro-row>
          </pro-grid>
        </pro-content>
      </pro-modal>
    );
  }
}