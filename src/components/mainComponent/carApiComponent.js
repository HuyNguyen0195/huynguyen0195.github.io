import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Container, Row, Col, Table, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { fetchCars } from '../../reduxStore/actionCreators';

const mapStateToProps = (state) =>{
    return {
        state: state,
    }
}
const mapDispatchToProps = {
      fetchCars: () => (fetchCars()),
} 

function  ReduxStore(props){
  useEffect(()=>{
   props.fetchCars(); 
  },[]);

  return (
    <div>
      <Container>
        <Row><h1>Table Car List</h1></Row>
        <Row>
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
           {props.state.cars.map((json)=>(
            <tr key={json.id}>
              <td>{json.year}</td>
              <td>{json.make}</td>
              <td>{json.model}</td>
              <td>{json.horsepower}</td>
              <td>{json.price}</td>
            </tr>
          ))} 
        </tbody>
      </Table>
      </Row>
      </Container>
    </div>
  );
}


export default connect(mapStateToProps,mapDispatchToProps)(ReduxStore);
