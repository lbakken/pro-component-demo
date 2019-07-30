import { Component, h, Element, State, Host, Listen } from '@stencil/core';
import { checkForBadWeatherByCity, checkForBadWeatherByBrowser } from '../../helpers/utils';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @Element() el: HTMLElement;

  @State() weather: string = '';
  @State() coords: Coordinates;
  @State() city: string;
  @State() isCustomer: boolean;

  private claimModal: HTMLProModalElement;
  private quoteModal: HTMLProModalElement;
  private thanksModal: HTMLProModalElement;
  private oopsModal: HTMLProModalElement;
  private generalRedirect: HTMLProModalElement;
  private progQuestion: HTMLProModalElement;
  private header: HTMLHeadingElement;

  componentDidLoad() {
    let modals = this.el.querySelectorAll('pro-modal') as NodeListOf<HTMLProModalElement>;
    this.claimModal = modals.item(0);
    this.quoteModal = modals.item(1);
    this.thanksModal = modals.item(2);
    this.oopsModal = modals.item(3);
    this.generalRedirect = modals.item(4);
    this.progQuestion = modals.item(5);
    this.header = document.querySelector('h1') as HTMLHeadingElement;
  }

  openQuestionModal = () => {
    this.progQuestion.present();
  }

  openQuoteModal = () => {
    this.weather != 'none' ? this.generalRedirect.present() : this.quoteModal.present();
  }

  openClaimModal = () => {
    this.claimModal.present();
  }

  makeAPIcall() {
    if (this.weather == '') {
      if (this.city != null) {
        checkForBadWeatherByCity(this.city).then(
          (value) => {
            this.weather = value;
          }
        ).catch((er) => {
          console.warn(er);
          this.oopsModal.present();
        });
      } else {
        checkForBadWeatherByBrowser().then(
          (value) => {
            this.weather = value;
          }
        ).catch(er => {
          console.warn(er);
          this.oopsModal.present();
        })
      }
    }
  }

  reset() {
    window.location.reload();
  }

  @Listen('closeClaim')
  onCloseClaim() {
    this.claimModal.dismiss();
    this.thanksModal.present();
  }

  @Listen('closeQuote')
  onCloseQuote() {
    this.quoteModal.dismiss();
    this.thanksModal.present();
  }

  @Listen('closeThanks')
  onCloseThanks() {
    this.thanksModal.dismiss();
    this.reset();
  }

  @Listen('closeOops')
  onCloseOops() {
    this.oopsModal.dismiss();
    this.reset();
  }

  @Listen('changeWeather')
  onChangeWeather(event: CustomEvent) {
    this.weather = event.detail.weather as string;
    this.header.style.color = 'rgba(38, 58, 60, 1)';
  }

  @Listen('isCustomer')
  onIsCustomer(event: CustomEvent) {
    this.isCustomer = event.detail.response;
    if (this.weather == 'none') {
      this.quoteModal.present();
    }
    else if (this.weather) {
      this.isCustomer ? this.claimModal.present() : this.generalRedirect.present();
    }
  }

  @Listen('location')
  onLocationChange(ev: CustomEvent) {
    ev.detail ? this.city = ev.detail.city.value : this.city = null;
    this.makeAPIcall();
  }

  @Listen('weatherButtonClick')
  onWeatherButtonClick() {
    if (this.isCustomer == null) {
      this.openQuestionModal();
    } else {
      if (this.weather == 'none') {
        this.quoteModal.present();
      }
      else if (this.weather) {
        this.isCustomer ? this.claimModal.present() : this.generalRedirect.present();
      }
    }
  }

  @Listen('styleSet')
  changeWeatherBackground(event: CustomEvent) {
    if (event.detail == 'none') {
      this.header.style.color = 'rgba(252, 213, 129, 1)';
    } else {
      this.header.style.color = 'rgba(38, 58, 60, 1)';
    }
  }

  render() {
    return (
      <Host>
        <pro-header onClick={() => this.reset()}>
          <ion-toolbar>
            <h1 id="main-header">Home</h1>
            {
              (this.weather == '') ?
                <div />
                :
                <img id="home" src="../assets/icon/house.png" />
            }
          </ion-toolbar>
        </pro-header>
        <div>
          <pro-grid>
            {
              (this.weather == '') ?
                <div>
                  <pro-row>
                    <pro-col>
                      <welcome-card />
                    </pro-col>
                  </pro-row>
                  <pro-row>
                    <pro-col>
                      <location-card />
                    </pro-col>
                  </pro-row>
                </div>
                :
                <pro-row>
                  <pro-col>
                    <weather-card history={this.weather} />
                  </pro-col>
                </pro-row>
            }
            <pro-row>
              <pro-col>
                <default-links />
              </pro-col>
            </pro-row>
          </pro-grid>
        </div>
        <ion-footer>
          <ion-toolbar>
            &nbsp; Powered By <a href="https://darksky.net/dev">Dark Sky API</a>
          </ion-toolbar>
        </ion-footer>
        <div class="modal-container">
          <claim-form />
          <quote-form />
          <thanks-modal />
          <oops-modal />
          <general-redirect />
          <prog-cust-question />
        </div>
      </Host>
    );
  }
}