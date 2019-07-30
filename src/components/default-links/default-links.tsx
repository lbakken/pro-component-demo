import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'default-links',
  styleUrl: 'default-links.css'
})
export class DefaultLinks {

  @Event() changeWeather: EventEmitter
  onChangeWeather(weather: string) {
    this.changeWeather.emit({ weather: weather })
  }

  render() {
    return (
      <pro-card>
        <pro-grid>
          <pro-row>
            <pro-col>
              <h3>Thank you for using our app!</h3>
            </pro-col>
          </pro-row>
          <pro-row>
            <pro-col>
              <p>Want to see more?</p>
              <p>Click on one of the links below to see what this page looks like during different weather events!</p>
            </pro-col>
          </pro-row>
          <pro-row>
            <pro-col size="12">
              <pro-button onClick={() => this.onChangeWeather('none')}>Sunny Example</pro-button>
            </pro-col>
          </pro-row>
          <pro-row>
            <pro-col size="6">
              <pro-button onClick={() => this.onChangeWeather('wind')}>Windy Example</pro-button>
            </pro-col>
            <pro-col size="6">
              <pro-button onClick={() => this.onChangeWeather('thunderstorms')}>Rain Example</pro-button>
            </pro-col>
          </pro-row>
          <pro-row>
            <pro-col size="6">
              <pro-button onClick={() => this.onChangeWeather('hail')}>Hail Example</pro-button>
            </pro-col>
            <pro-col size="6">
              <pro-button onClick={() => this.onChangeWeather('snow')}>Snow Example</pro-button>
            </pro-col>
          </pro-row>
        </pro-grid>
      </pro-card>
    );
  }
}