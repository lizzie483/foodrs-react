import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/header.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            
            <h3>Foodr's</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel hendrerit orci, eu euismod neque. Nullam eget viverra enim. Phasellus nibh odio, mollis et efficitur sed, lacinia ut nulla. Praesent vitae nisi tellus. Phasellus at tortor ultrices, condimentum quam id, condimentum diam. Nunc euismod, sapien nec tincidunt luctus, sapien lorem efficitur risus, nec venenatis felis urna nec tellus. Nullam mollis est ante, quis sodales magna consectetur id. Donec eu tortor leo. Suspendisse efficitur arcu enim, sit amet finibus orci consequat ut. Nulla eu ante diam. Ut nibh tellus, tristique eu consectetur ut, condimentum nec purus. Curabitur congue nunc vitae ornare rutrum. Donec libero est, efficitur vel velit et, euismod sodales sapien. Sed diam sem, vestibulum sed congue quis, efficitur sit amet ipsum. Praesent nibh urna, volutpat ut risus vitae, finibus efficitur massa. Donec dapibus blandit ipsum, eu vehicula dui sagittis nec.</p>
            <p>Pellentesque eleifend purus eget viverra vestibulum. Fusce non leo quis neque molestie ornare at ac enim. In non mauris libero. In augue neque, imperdiet sit amet maximus in, pulvinar nec massa. In ut finibus sem, eget feugiat urna. Vivamus nisi orci, molestie sed ultricies et, tempor a est. Phasellus scelerisque, eros nec viverra lacinia, augue lacus tempor nisi, sed malesuada odio nisl quis justo. Integer gravida mauris in lectus luctus pulvinar. Nullam ut varius velit, quis laoreet felis. Sed rutrum ultrices tortor, ac consequat magna efficitur eget. Nulla ullamcorper euismod mi id sollicitudin. Nam condimentum arcu sit amet tortor vestibulum ornare. Vestibulum bibendum velit sed nisl vestibulum, ac feugiat arcu cursus. Nulla vulputate molestie lectus ullamcorper egestas. Aenean faucibus orci quis lorem finibus, eget tincidunt eros pellentesque. Nullam et malesuada ligula.</p>
            <p>Etiam placerat est a dapibus vulputate. Integer eu consequat sem. Maecenas vel tempor nunc, vel hendrerit mi. Maecenas egestas justo quis tellus luctus, quis laoreet eros tristique. In eros tortor, lacinia quis eleifend posuere, tristique ac urna. Nulla semper ornare justo, sollicitudin finibus est aliquam ut. Nullam hendrerit, tellus id sagittis feugiat, ipsum magna lobortis mauris, in ultricies dui lorem eu nunc. Proin a est odio. Proin lobortis magna sit amet risus malesuada, ac aliquet libero ornare. Duis sit amet auctor ligula. Aenean rutrum diam erat, eget vulputate libero porttitor id. Pellentesque congue euismod tortor, at ultricies nisl facilisis non. In aliquet risus maximus enim auctor vestibulum. Proin ut est in augue tempor pharetra id quis enim.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
