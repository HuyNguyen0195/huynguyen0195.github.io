import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { json } from 'react-router-dom';
import { Container, Row, Col, Table, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Input, Button } from 'reactstrap';
import { fetchCars } from '../../../reduxStore/actionCreators';
import Paginate from './paginate';
import ShowLists from './showLists';

const mapStateToProps = (state) =>{
    return {
        state: state,
    }
}
const mapDispatchToProps = {
      fetchCars: () => (fetchCars()),
} 

function  CarApi(props){
  
  useEffect(()=>{
   props.fetchCars();
  },[]);

  const lists = props.state.cars;
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [listsPerPage] = useState(30);
  const indexOfLastData = currentPage * listsPerPage;
  const indexOfFirstData = indexOfLastData - listsPerPage;
  const currentLists = lists.slice(indexOfFirstData, indexOfLastData);

  const paginate= pageNumber =>{
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <Container>
        <Row className='mt-3'>
          <Col><h1>Table Car List</h1></Col>
          <Col className='mt-1'>
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
          <Col>

            <Paginate
            listsPerPage={listsPerPage} 
            totalLists={lists.length} 
            paginate={paginate} />

          </Col>
        </Row>
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
              <ShowLists 
                lists={currentLists} 
                year={year} 
                make={make} 
                model={model} 
                price={price} />
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(CarApi);
