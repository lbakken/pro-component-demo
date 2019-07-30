import { Component, Prop, h, State } from '@stencil/core';
import { OpenWeather } from "../../helpers/interfaces/OpenWeather";

@Component({
  tag: 'weather-api-component',
})
export class MyComponent {

  //Jons Key -- 0e6736aa176b5c618a775168e0af47d8
  @Prop() apiKey: string = "0e6736aa176b5c618a775168e0af47d8";
  @Prop() city: string = "London";
  //default Current weather url
  @State() apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
  @State() weatherApiResponse: OpenWeather;
  componentWillLoad() {
    fetch(this.apiUrl)
      .then((response: Response) => response.json())
      .then(response => { this.weatherApiResponse = response })
  }

  render() {
    return (
      <div>
        <h2>Weather API</h2>
        <p>{this.weatherApiResponse.coord.lon}</p>
        <p>{this.weatherApiResponse.coord.lat}</p>
      </div>
    );
  }
}