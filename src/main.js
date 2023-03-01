import './main.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';


function Main(){
    
const [hidemain, sethidemain] = useState(true);
const [showapp, setshowapp] = useState(true);
    const handleAdd=()=> {
            let cards = document.querySelector(".cards");
            let wrapper = document.querySelector(".app");
            sethidemain(!hidemain + cards.classList.add("hide"));
            setshowapp(!showapp + wrapper.classList.add("show"));
           
    }
    function handleDelete(){
        
    }
    function handleUpdate(){

    }
  const [showlist, setShowList] = useState(false);
return( 
     <>
     <div className='main'>
     <App/>
     <div className='cards'>
    <Card>
      <Card.Header>ADD GUEST</Card.Header>
      <Card.Body>
        <Card.Title>To add any new guest for room booking click this butten</Card.Title>
        <Button onSubmit={handleAdd} variant="outline-danger">BOOK</Button>
      </Card.Body>
    </Card>
    <hr/>
    <Card >
      <Card.Header>UPDATE GUEST</Card.Header>
      <Card.Body>
        <Card.Title>To update the details of any room click here</Card.Title>
        <Button onClick={handleUpdate} variant="outline-danger">EDIT</Button>
      </Card.Body>
    </Card>
        <hr/>
    <Card >
      <Card.Header>DELETE GUEST</Card.Header>
      <Card.Body>
        <Card.Title>To delete the booking of any room click here</Card.Title>
        <Button onClick={handleDelete} variant="outline-danger">DELETE</Button>
      </Card.Body>
    </Card>
        <hr/>
    <Alert show={showlist} variant="danger" className="table">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        <Button onClick={() => setShowList(false)} variant="outline-success">
            Close this tab
        </Button>
        </div>
    </Alert>

  {!showlist && <Button onClick={() => setShowList(true)}  variant="danger" >Check Bookings</Button>}
  </div>
  </div>
  </>

)
}
export default Main