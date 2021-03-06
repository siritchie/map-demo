import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class App extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
  // render() {
  //   return (
  //     // <div className="App">
  //     //   <header className="App-header">
  //     //     <img src={logo} className="App-logo" alt="logo" />
  //     //     <p>
  //     //       Edit <code>src/App.js</code> and save to reload.
  //     //     </p>
  //     //     <a
  //     //       className="App-link"
  //     //       href="https://reactjs.org"
  //     //       target="_blank"
  //     //       rel="noopener noreferrer"
  //     //     >
  //     //       Learn React
  //     //     </a>
  //     //   </header>
  //     // </div>


  //   );
  // }
}

export default App;