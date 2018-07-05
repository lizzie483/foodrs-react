import React, { Component } from 'react';
import { Grid, Row, Col, Image,FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import './News.css';



export default class News extends Component {
  
  
  
  render() {
    return (
      <div>
        <Image src="assets/header.jpg" thumbnail className="header-image" />
        <Grid>
          <h2>Unete a la comunidad</h2>
          <Row>
            <Col xs={12} sm={4}  smOffset={3} className="main-section">

            <h2>Iniciar Sesión</h2>
              <FormGroup> 

                <FormControl
                  id="formControlsText"
                  type="text"
                  label="Text"
                  placeholder="Intenta con CHINCHA"
                  />
          <FormControl
                id="formControlsPass"
                type="password"
                  label="Text"
                  placeholder=""
                  />
              </FormGroup>
              
              <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />
              
            </Col>

            
          </Row>
        </Grid>
      </div>
    )
  }
}
