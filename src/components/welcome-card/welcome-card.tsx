
import { Component, h } from '@stencil/core';


@Component({
  tag: 'welcome-card',
  styleUrl: 'welcome-card.css'
})
export class WelcomeCard {

  render() {
    return (
      <pro-card>
        <pro-grid>
          <pro-row>
            <pro-col size="8">
              <h2>Welcome to our Intern Project!</h2>
            </pro-col>
            <pro-col size="4">
              <h3>Stencil Web Components</h3>
            </pro-col>
          </pro-row>
          <pro-row>
            <pro-col size="12">
              <p>
                For our project, we used stencil web components to create a user interface library
                and then used that library to create this application! This application checks recent
                weather events in your area and, based on the weather and whether or not you are a
                returning customer, will offer you a quote form, a claim form, or redirect you to
                another insurance provider.
            </p>
            </pro-col>
          </pro-row>
          <pro-row>
            <pro-col size="12">
              <p>
                To use our app, either enter a city below or allow your web browser to use your location.
              </p>
            </pro-col>
          </pro-row>
        </pro-grid>
      </pro-card>
    );
  }
}