import React, {Component} from 'react';
import 'react-materialize';
import Carousel from './Carousel';
import axios from 'axios';
import { 
  Row, 
  Col, 
  Grid, 
  Thumbnail, 
  Button,
  ButtonGroup,
  DropdownButton,
  MenuItem,
  FormControl,
  FormGroup,
  ControlLabel,
  Form
} from 'react-bootstrap';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter 
} from 'react-modal-bootstrap';



class Main extends Component {
    constructor (props) {
        super(props);
            this.state = {
               isOpen: false,
               qty: '1',
               name: 'RegularCofee',
               milk: 'FullCream',
               size: 'tall',
               location: 'ForHere',
               data: []         
           }

          this.openModal = this.openModal.bind(this);
          this.hideModal = this.hideModal.bind(this);
          this.setQuantity = this.setQuantity.bind(this);
          this.setDrinkType = this.setDrinkType.bind(this);
          this.setMilkType = this.setMilkType.bind(this);
          this.setSize = this.setSize.bind(this);
          this.setOrderType = this.setOrderType.bind(this);
          this.postDataToApi = this.postDataToApi.bind(this);    
      }

 
openModal = () => {
  this.setState({
    isOpen: true
  });
}

hideModal = () => {
  this.setState({
    isOpen: false,
    
  });
}

setQuantity(event){
event.preventDefault();
this.setState({qty: event.target.value});

}

setDrinkType(event){
event.preventDefault();
this.setState({name: event.target.value});

}

setMilkType(event){

event.preventDefault();
this.setState({milk: event.target.value});

}

setSize(event){

event.preventDefault();
this.setState({size: event.target.value});

}

setOrderType(event){

event.preventDefault();
this.setState({location: event.target.value});

}

postDataToApi(event){
  event.preventDefault();
  var order = { 
               qty: this.state.qty,
               name: this.state.name,
               milk: this.state.milk,
               size: this.state.size,
               location: this.state.location,
          }

  axios.post('http://localhost:3001/api/sanjose/order', order)
  .then(res => {
   this.setState({ data: res });
   console.log(res);
   })
   .catch(err => {
   console.error(err);
   }); 

}


render () {
    return (
   <div> 
  <Carousel />
<Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
  <ModalHeader>
    <ModalClose onClick={this.hideModal}/>
    <ModalTitle>Place Your Order</ModalTitle>
  </ModalHeader>
  <ModalBody>

  <Form horizontal >
      <h3>Store: San Jose</h3>
  <FormGroup controlId="formControlsSelect">
      <h5 >Number of Items</h5>
      <FormControl componentClass="select" placeholder="select" onChange={this.setQuantity} value={this.state.qty}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </FormControl>
      <h5 >Hot / Cold Drinks</h5>
      <FormControl componentClass="select" placeholder="select" onChange={this.setDrinkType} value={this.state.name}>
        <option value="RegularCoffee">Regular Coffee</option>
        <option value="Decaf">Decaf</option>
        <option value="Americano">Americano</option>
        <option value="Cappccuino">Cappccuino</option>
        <option value="WhiteMocha">White Mocha</option>
        <option value="CafeLatte">CafeLatte</option>
        <option value="IcedCaffeAmericano">Iced Caffe Americano</option>
        <option value="IcedCaffeLatte">Iced Caffe Latte</option>
        <option value="IcedCaffeMocha">Iced Caffe Mocha</option>
        <option value="Iced Caramel Machiato">Iced Caramel Machiato</option>
        <option value="IcedVanillaLatte">Iced Vanilla Latte</option>
      </FormControl>
      
      <h5>Milk Type (Does not apply for Iced Drinks)</h5>
      <FormControl componentClass="select" placeholder="select" onChange={this.setMilkType} value={this.state.milk}>
        <option value="FullCream">Full Cream</option>
        <option value="HalfNHalf">Half-n-Half</option>
      </FormControl>
      <h5>Select Size</h5>
      <FormControl componentClass="select" placeholder="select" onChange={this.setSize} value={this.state.size}>
        <option value="tall">tall</option>
        <option value="Grande">Grande</option>
        <option value="Venti">Venti</option>
      </FormControl>
       <h5>Order Type</h5>
       <FormControl componentClass="select" placeholder="select" onChange={this.setOrderType} value={this.state.location}>
        <option value="ForeHere">For Here</option>
        <option value="ToGo">To Go</option>
      </FormControl>
  </FormGroup>
</Form>

  </ModalBody>
  <ModalFooter>
    <button className='btn btn-default' onClick={this.hideModal}>
      Cancel
    </button>
    <button className='btn btn-primary' onClick={this.postDataToApi}>
      Place Order
    </button>
  </ModalFooter>

</Modal>
           
<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" alt="242x200">
        <h3>Order At San jose</h3>
        <p>10% Disctount for SJSU students</p>
        <p>
          <Button bsStyle="primary" onClick={this.openModal}>Order</Button>&nbsp;
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image1.jpg" alt="242x200">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <h3>Order At San Francisco</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Order</Button>&nbsp;
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image2.JPG" alt="242x200">                                                                                                                                                                                                                                                                                                                                                
        <h3>Order At Palo Alto</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Order</Button>&nbsp;
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
           </div>
        );
    }
};

export default Main;