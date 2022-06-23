import React, { useEffect, useState } from 'react'
import { Table, Card, Container, Row } from 'react-bootstrap'
function UserCard(props) {
    const [users, setUsers] = useState([])
    const getUser = function(){
        fetch('https://randomuser.me/api/?results=10')
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
   {/* {users.map((user) =>{
                return(
                       <Row className="Centered">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Title>{user.location.timezone.description}</Card.Title>
                </Card.Body>
                <Card.Img variant='top' src='https://media.istockphoto.com/videos/clock-animation-in-12-hour-loop-animation-with-optional-luma-matte-video-id1257170567?s=640x640'/>
            </Card>
                        </Row> 
              
            
                )
            })}
  
      <Card style={{ width: '18rem' }}>
          <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Title>{}</Card.Title>
      </Card.Body>
      <Card.Img variant='top' src='https://media.istockphoto.com/videos/clock-animation-in-12-hour-loop-animation-with-optional-luma-matte-video-id1257170567?s=640x640'/>
  </Card>
     */}
  
    <div className="User">
            
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) =>{
                 const formattedDate = new Date(user.registered.date)
                return(
                    
                    <tr>
                    <td> <img src={user.picture.thumbnail} alt="" />  {user.name.first}</td>
                    <td>{user.login.username}</td>
                    <td>{user.email}</td>
                    <td> {formattedDate.toLocaleDateString()}</td>
                    <td>{user.location.country}</td>
                  </tr>
                )
            })}
         
        </tbody>
      </Table>
</div>
</>
  )
}

export default UserCard