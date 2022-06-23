import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserCard from './components/UserCard';
import { Col, Container, Row } from 'react-bootstrap';
import HeadNav from './components/HeadNav';
import Clocks from './components/Clocks';
import UserDashboard from './components/UserDashboard';


function App() {
  return (
    <>
      <HeadNav/>


      <UserDashboard/>

    <Container>
      <Row className='Centered'>
      <Clocks name='Sydney' className='gy-3' xs={12} sm={6} lg={4} xl={3}/>
      <Clocks name="Tokyo" className='gy-3' xs={12} sm={6} lg={4} xl={3}/>
      <Clocks name="Paris" className='gy-3' xs={12} sm={6} lg={4} xl={3}/>
      </Row>
      <br></br>
      <Col className='gy-3 table' xs={12} sm={6} lg={4} xl={3}><UserCard/></Col>
    </Container>
    </>
  );
}

export default App;
