
import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'oops-modal',
  styleUrl: 'oops-modal.css'
})
export class OopsModal {

  @Event() closeOops: EventEmitter;

  render() {
    return (
      <pro-modal>
        <pro-content>
          <h1>Well this is strange. . .</h1>
          <pro-grid>
            <pro-row>
              <pro-col size="12">
                <p class="head">We couldn't find that city.</p>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col size="12">
                <p class="content">Don't worry, let's try again!</p>
                <pro-button onClick={() => this.closeOops.emit()}>Try Again!</pro-button>
              </pro-col>
            </pro-row>
          </pro-grid>
        </pro-content>
      </pro-modal>
    );
  }
}