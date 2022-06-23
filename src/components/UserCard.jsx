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
            {users.map((user, i) =>{
                 const formattedDate = new Date(user.registered.date)
                return(
                    
                    <tr key={i}>
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