import React from 'react'
import '../App.css';
import date from 'date-and-time';
import { Button, Card } from 'react-bootstrap'

const now = new Date()
date.format(now, 'hh:mm A')
function Clocks(props) {
    
  return (
    
    <Card style={{ width: '18rem' }}>
        <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Title>{Date()}</Card.Title>
    </Card.Body>
    <Card.Img variant='top' src='https://media.istockphoto.com/videos/clock-animation-in-12-hour-loop-animation-with-optional-luma-matte-video-id1257170567?s=640x640'/>
</Card>
  )
}

export default Clocks

