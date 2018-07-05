import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Bienvenido a Foodr's</h2>
          <p>Una nueva forma de experimentar la gastronomia en Perú.</p>
          <Link to="/about">
            <Button bsStyle="primary">Conocenos</Button>
          </Link>
        </Jumbotron>
        <h3>Especiales del día</h3>
        <Row className="show-grid text-left">
        <Col xs={12} sm={3}>
        <FormControl
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Intenta con CHINCHA"
          />
        </Col>
        <Col xs={12} sm={2}>
        <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="Numero de Personas">
        <option value="1">1 Persona</option>
        <option value="2">2 Personas</option>
        <option selected value="3">3 Personas</option>
        <option value="4">4 Personas</option>
      </FormControl>
      </FormGroup>
        </Col>
        <Col xs={12} sm={2}>
        <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="Tipo de Comida">
        <option selected value="1">Comida Criolla</option>
        <option value="2">Comida Vegana</option>
        <option value="3">Comida Internacional</option>
        <option value="4">Cocina Gourmet</option>
      </FormControl>
      </FormGroup>
        </Col>
        <Col xs={12} sm={3}><Button type="submit" bsStyle="primary" id="submit">Filtrar</Button></Col>
        </Row>
       <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/food1.jpg"  className="profile-pic"/>
            <h3>Menu 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim.</p>
            <Link to="/news">
            <Button bsStyle="primary">Comprar</Button>
          </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/food2.jpg"  className="profile-pic"/>
            <h3>Menu 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim.</p>
            <Link to="/news">
            <Button bsStyle="primary">Comprar</Button>
          </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/food3.jpg"  className="profile-pic"/>
            <h3>Menu 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim.</p>
            <Link to="/news">
            <Button bsStyle="primary">Comprar</Button>
          </Link>
          </Col>
        </Row>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/food4.jpg"  className="profile-pic"/>
            <h3>Menu 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim.</p>
            <Link to="/news">
            <Button bsStyle="primary">Comprar</Button>
          </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/food5.jpg"  className="profile-pic"/>
            <h3>Menu 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim.</p>
            <Link to="/news">
            <Button bsStyle="primary">Comprar</Button>
          </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/food6.jpg"  className="profile-pic"/>
            <h3>Menu 6</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim.</p>
            <Link to="/news">
            <Button bsStyle="primary">Comprar</Button>
          </Link>
          </Col>
        </Row>
        
        <h4 id="mensaje">Dedicado a viajeros en busca de una nueva experiencia gastrónomica</h4>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>Conocí de una forma diferente esta ciudad gracias a Foodr's.</p>
            <p><i>Lima,2017</i></p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>Fue la mejor decision usar este servicio de viaje con mi familia.</p>
            <p><i>Ica,2018</i></p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Jhon</h3>
            <p>100% Recomendado</p>
            <p><i>Cusco, 2018</i></p>
          </Col>
        </Row>
        
      </Grid>

      
    )
  }
}
