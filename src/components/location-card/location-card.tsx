
import { Component, h, Element, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'location-card',
  styleUrl: 'location-card.css'
})
export class LocationCard {

  @Element() el: HTMLElement;

  private city: string = '';

  @Event() location: EventEmitter

  handleSubmit() {
    this.location.emit({ city: this.city });
  }

  handleLocation() {
    this.location.emit();
  }

  @Listen('inputChange')
  onInputChange(ev: CustomEvent) {
    this.city = ev.detail as string;
  }

  render() {
    return (
      <pro-card>
        <pro-grid>
          <pro-row class="extra-space">
            <pro-col size="8">
              <pro-input placeholder="Enter City . . ." label="City"></pro-input>
            </pro-col>
            <pro-col size="4" class="extra-space">
              <pro-button onClick={() => this.handleSubmit()}>Submit</pro-button>
            </pro-col>
          </pro-row>
          <pro-row class="extra-space">
            <pro-col size="12">
              <img id="location" onClick={() => this.handleLocation()} src="https://img.icons8.com/material/24/000000/worldwide-location.png" />
              <pro-label onClick={() => this.handleLocation()} for="location" class="location-text">Use my current location</pro-label>
            </pro-col>
          </pro-row>
        </pro-grid>
      </pro-card>
    );
  }
}