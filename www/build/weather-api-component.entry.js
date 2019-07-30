import { r as registerInstance, h } from './chunk-91927964.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //Jons Key -- 0e6736aa176b5c618a775168e0af47d8
        this.apiKey = "0e6736aa176b5c618a775168e0af47d8";
        this.city = "London";
        //default Current weather url
        this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
    }
    componentWillLoad() {
        fetch(this.apiUrl)
            .then((response) => response.json())
            .then(response => { this.weatherApiResponse = response; });
    }
    render() {
        return (h("div", null, h("h2", null, "Weather API"), h("p", null, this.weatherApiResponse.coord.lon), h("p", null, this.weatherApiResponse.coord.lat)));
    }
}

export { MyComponent as weather_api_component };
