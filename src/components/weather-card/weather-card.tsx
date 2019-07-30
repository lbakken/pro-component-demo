import { Component, h, Element, Event, EventEmitter, Prop, Watch, State } from '@stencil/core';
@Component({
  tag: 'weather-card',
  styleUrl: 'weather-card.css'
})
export class WeatherCard {

  @Element() el: HTMLElement;

  @Event() styleSet: EventEmitter;
  @Event() weatherButtonClick: EventEmitter;

  @Prop() isProCust: boolean;
  @Prop({ mutable: true }) history!: string;
  @Watch('history')
  onHistoryChange(newValue: string) {
    this.history = newValue;
    this.updateInfo();
  }

  @State() header: string;
  @State() subHeader: string;
  @State() body: string;
  @State() button: string;
  @State() icon: HTMLImageElement;

  private updateInfo() {
    this.subHeader = 'We\'ve got you covered!'
    this.body = 'Follow the link below!';
    this.button = 'Continue';
    this.icon = <img />;
    if (this.isProCust == true) {
      this.subHeader = 'Need a new quote?';
      this.button = 'Get a new Quote!';
    } else if (this.isProCust == false) {
      this.subHeader = 'Need a quote?';
      this.button = 'Get a Quote!';
    }

    this.styleSet.emit(this.history);

    switch (this.history) {
      case 'none':
        this.header = <h1 class="sunny">Looks Clear to Me!</h1>;
        this.subHeader = 'What a beautiful day!'
        this.icon = <img src="../../assets/icon/base.png" alt="good weather" />;
        break;
      case 'hail':
        this.header = <h1 class="dark">Hail got you down?</h1>;
        this.icon = <img src="../../assets/icon/hail.png" alt="hail" />;
        break;
      case 'snow':
        this.header = <h1 class="dark">Snow got you down?</h1>;
        this.icon = <img src="../../assets/icon/snow.png" alt="snow" />;
        break;
      case 'thunderstorms':
        this.header = <h1 class="dark">Rain got you down?</h1>;
        this.icon = <img src="../../assets/icon/rain.png" alt="rain" />;
        break;
      case 'wind':
        this.header = <h1 class="dark">Wind got you down?</h1>;
        this.icon = <img src="../../assets/icon/wind.png" alt="wind" />;
        break;
      default:
        this.header = 'Oops, something went wrong...';
        this.body = 'Click below to keep on keeping on.';
        this.button = 'Keep on Keeping on';
        break;
    }
  }

  componentWillLoad() {
    this.updateInfo();
  }

  render() {
    return (
      <pro-card>
        <pro-content>
          <h1>{this.header}</h1>
          {this.icon}
          <h2>{this.subHeader}</h2>
          <pro-grid>
            <pro-row>
              <pro-col>
                <p>{this.body}</p>
              </pro-col>
            </pro-row>
            <pro-row>
              <pro-col size="12">
                <pro-button onClick={() => this.weatherButtonClick.emit()}>{this.button}</pro-button>
              </pro-col>
            </pro-row>
          </pro-grid>
        </pro-content>
      </pro-card>
    );
  }
}