import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import hospitals from './hospital.geojson'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import AppRouter from './router.js'
import RequestSuppliesModal from './Components/requestSuppliesFormModal'


function App() {
  const [modalShow, setModalShow] = useState(false);
  mapboxgl.accessToken = 'pk.eyJ1IjoiZm9nczk2IiwiYSI6ImNrODZscmx2ajA4MTUzam5oNmxqZWIwYTcifQ.YOo54ZuxuHWS2l-zvAsNYA';


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">U.S. Hospital Supply Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => setModalShow(true)}>Create a Hosptial Supply Request</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>
          <RequestSuppliesModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            //modalShow = {modalShow}
          />  
      </div>
       <Map></Map>
    
    </div>
  );
}

class Map extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lng: -80.7959,
      lat: 41.3992 ,
      zoom: 3
    };
  }
  
  componentDidMount() {

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    }
    
    );
    
    map.on('load', function() {
      map.addSource('trees', {
        type: 'geojson',
        data: hospitals
      });
      map.addLayer({
        id: 'trees-heat',
        type: 'heatmap',
        source: 'trees',
        maxzoom: 15,
        paint: {
          // increase weight as diameter breast height increases
          'heatmap-weight': {
            property: 'bedCount',
            type: 'exponential',
            stops: [
              [1, 0],
              [62, 1]
            ]
          },
          // increase intensity as zoom level increases
          'heatmap-intensity': {
            stops: [
              [11, 1],
              [15, 3]
            ]
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(236,222,239,0)',
            0.2, 'rgb(208,209,230)',
            0.4, 'rgb(166,189,219)',
            0.6, 'rgb(103,169,207)',
            0.8, 'rgb(28,144,153)'
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [
              [11, 15],
              [15, 20]
            ]
          },
          // decrease opacity to transition into the circle layer
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1],
              [15, 0]
            ]
          },
        }
      }, 'waterway-label');

      map.addLayer({
        id: 'trees-point',
        type: 'circle',
        source: 'trees',
        minzoom: 10,
        paint: {
          // increase the radius of the circle as the zoom level and dbh value increases
          'circle-radius': {
            property: 'hospitalName',
            type: 'exponential',
            stops: [
              //[{ zoom: 15, value: 1 }, 5],
              //[{ zoom: 15, value: 62 }, 10],
              [{ zoom: 22, value: 1 }, 20],
              [{ zoom: 22, value: 62 }, 50],
            ]
          },
          'circle-color': {
            property: 'hospitalName',
            type: 'exponential',
            stops: [
              [0, 'rgba(236,222,239,0)'],
              [10, 'rgb(236,222,239)'],
              [20, 'rgb(208,209,230)'],
              [30, 'rgb(166,189,219)'],
              [40, 'rgb(103,169,207)'],
              [50, 'rgb(28,144,153)'],
              [60, 'rgb(1,108,89)']
            ]
          },
          'circle-stroke-color': 'white',
          'circle-stroke-width': 1,
          'circle-opacity': {
            stops: [
              [8, 0],
              [9, 1]
            ]
          }
        }
      }, 'waterway-label');
      map.on('click', 'trees-point', function(e) {
        new mapboxgl.Popup()
          .setLngLat(e.features[0].geometry.coordinates)
          .setHTML('<b>Hospital Name:</b> ' + e.features[0].properties.hospitalName + '\n\n'
           + '<b>Bed Count:</b> ' + e.features[0].properties.bedCount)
          .addTo(map);
      });
    });

    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
        });
      });
  }
  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }

}
export default App;
