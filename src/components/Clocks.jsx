import React, { useEffect, useState } from 'react'
import '../App.css';
import date from 'date-and-time';
import { Button, Card } from 'react-bootstrap'


function Clocks(props) {
    const [users, setUsers] = useState([])
    const getUser = function(){
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            setUsers(data.results)
        })
    }
   
    useEffect(function(){
        getUser()
    }, [])
    
  return (
    <>
    {users.map((user, i) =>{
        // const now = new Date()
        // date.format(now, 'hh:mm A')
       const now = date.format(new Date(), 'hh:mm A')
        return(
            <Card key={i} style={{ width: '18rem' }}>
        <Card.Img variant='top' src='https://media.istockphoto.com/videos/clock-animation-in-12-hour-loop-animation-with-optional-luma-matte-video-id1257170567?s=640x640'/>
            <Card.Body>
        <Card.Title>{user.location.timezone.description}</Card.Title>
        <Card.Title>{user.location.timezone.offset}</Card.Title>
        <Card.Title>{now}</Card.Title>
        </Card.Body>
    </Card>
      
    
        )
    })}
    </>
  )
}
export default Clocks
