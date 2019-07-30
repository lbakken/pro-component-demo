import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @Listen('styleSet')
  changeWeatherBackground(event: CustomEvent) {
    let background = document.querySelector('ion-app') as HTMLIonAppElement;

    switch (event.detail) {
      case 'none':
        background.style.backgroundImage = 'linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%)';
        break;
      case 'hail':
        background.style.backgroundImage = 'linear-gradient(0deg, rgba(67, 62, 54, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
        break;
      case 'snow':
        background.style.backgroundImage = 'linear-gradient(0deg, rgba(77, 101, 110, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
        break;
      case 'thunderstorms':
        background.style.backgroundImage = 'linear-gradient(0deg, rgba(38, 58, 60, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
        break;
      case 'wind':
        background.style.backgroundImage = 'linear-gradient(0deg, rgba(66, 86, 62, 1) 4%, rgba(210, 220, 221, 1) 39%, rgba(252, 255, 252, 1) 58%)';
        break;
      default:
        background.style.backgroundImage = 'linear-gradient(0deg, rgba(252, 213, 129, 1) 0%, rgba(253, 255, 252, 1) 65%)';
        break;
    }
  }


  render() {
    return (
      <ion-app id="background-controller">
        <ion-router>
          <ion-route url='/' component='app-home' />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
