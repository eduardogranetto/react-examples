import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: '',
      weatherData: null
    }
  }

  changeCity(e){
    this.setState({city: e.target.value})
  }

  async handleSubmit(e){
      e.preventDefault();
      // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
      const apiKey = '7ea4dfa41ddd589c0451617c79a62729';
      const city = this.state.city
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          this.setState({
              weatherData: data
          })
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

  render() {    
  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="mb-3">
          <label htmlFor="cityInput" className="form-label">
            Enter City:
          </label>
          <input
            type="text"
            className="form-control"
            id="cityInput"
            value={this.state.city}
            onChange={this.changeCity.bind(this)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </form>
      {this.state.weatherData && (
        <div className="mt-4">
          <h2>Weather Information for {this.state.weatherData.name}</h2>
          <p>Temperature: {this.state.weatherData.main.temp} K</p>
          <p>Weather: {this.state.weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
  }

}

export default App;