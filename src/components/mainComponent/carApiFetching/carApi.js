import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { json } from 'react-router-dom';
import { Container, Row, Col, Table, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Input, Button } from 'reactstrap';
import { fetchCars } from '../../../reduxStore/actionCreators';

const mapStateToProps = (state) =>{
    return {
        state: state,
    }
}
const mapDispatchToProps = {
      fetchCars: () => (fetchCars()),
} 
const showList =({props, year, make, model, price})=>{
  return props.state.cars
  .filter(json=>{return (make != '' ? json.make == make : json ) })
  .filter(json=>{return (model != '' ? json.model == model : json ) })
  .filter(json=>{return (year != '' ? json.year == year : json ) })
  .filter(json=>{return (price != '' ? json.price <= price : json ) })
  .map((json)=>(
        <tr key={json.id}>
        <td>{json.year}</td>
        <td>{json.make}</td>
        <td>{json.model}</td>
        <td>{json.horsepower}</td>
        <td>{json.price}</td>
        </tr>)
        )
}

function  CarApi(props){
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  useEffect(()=>{
   props.fetchCars();
  },[]);
  return (
    <div>
      <Container>
        <Row>
          <Col><h1>Table Car List</h1></Col>
          <Col>
            <UncontrolledDropdown>
              <DropdownToggle>Sort By</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>sort by make</DropdownItem>
                <DropdownItem>sort by model</DropdownItem>
                <DropdownItem>sort by year</DropdownItem>
                <DropdownItem>sort by price</DropdownItem>
                <DropdownItem>sort by horsepower</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col><Input onChange={(e)=>(setYear(e.target.value))} placeholder='year' /></Col>
          <Col><Input onChange={(e)=>(setMake(e.target.value))} placeholder='make' /></Col>
          <Col><Input onChange={(e)=>(setModel(e.target.value))} placeholder='model' /></Col>
          <Col><Input onChange={(e)=>(setPrice(e.target.value))} placeholder='price' /></Col>
          <Col><Button color='primary'>Find</Button></Col>
        </Row>
        <hr/>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Table striped>
            <thead>
              <tr>
                <th>year</th>
                <th>make</th>
                <th>model</th>
                <th>horsepower</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {showList({props:props,year:year,make:make,model:model,price:price})}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}


export default connect(mapStateToProps,mapDispatchToProps)(CarApi);
