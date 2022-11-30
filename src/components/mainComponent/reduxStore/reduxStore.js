import React, { useState } from 'react';
import { connect } from "react-redux";
import { addCar,deleteCar, updateCar } from './actions';
import {Button, Col, Container, Input, Row, Table} from 'reactstrap'

const mapStateToProps = (state) =>{
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      addCar: (make,model)=> dispatch(addCar(make,model)),
      deleteCar:(id) => dispatch(deleteCar(id)),
      updateCar: (id,make,model) => dispatch(updateCar(id,make,model)),
  }
} 

function ReduxStore(props) {
  const cars = props.state;
  const [id,setId] = useState(null);
  const [make,setMake] = useState('');
  const [model,setModel] = useState('');

  return (
    <>
    <div>
      <Container>
        <Row> <h1>Redux Store</h1></Row>
        <Row><h2>Click on item before actions</h2></Row>
        <Row>
          <Col>
            <Input size={'30px'} value={make}
            type={'text'} placeholder='make'
            onChange={(e)=>{setMake(e.target.value)}}/>
          </Col>
          <Col>
            <Input value={model} placeholder='model'
            type={'text'} onChange={(e)=>{setModel(e.target.value)}}/>
          </Col>
        </Row>
        <Row>
        <Col>
        <Button color='primary' onClick={(e)=>{
      if(make === '' || model === ''){
        alert('input empty');
        return 0;
      }
      e.preventDefault(); props.addCar(make,model);
    }}>ADD CAR</Button>
        </Col>
        <Col>
        <Button onClick={(e)=>{
      if(make === '' || model === ''){
        alert('input empty');
        return 0;
      }
      e.preventDefault(); props.deleteCar(id);
    }}>DELETE CAR</Button>
        </Col>
        <Col>
        <Button color='danger' onClick={(e)=>{
      if(make === '' || model === ''){
        alert('input empty');
        return 0;
      }
      e.preventDefault(); props.updateCar(id,make,model);
    }}>UPDATE CAR</Button>
        </Col>
     </Row>
     <Row>
      <Col>
      <Table striped>
        <thead color='primary'>
          <tr className='table-warning'>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>   
      {cars.map((car,index)=>(
        <tr onClick={()=>{
          setId(index);setMake(car.make);setModel(car.model);
        }}>
          <th>{index+1}</th>
          <th>{car.make}</th>
          <th>{car.model}</th>
        </tr>
      ))}
     </tbody>
      </Table>
      </Col>
      </Row>
      </Container>

    </div>
    </>
  );
}


export default connect(mapStateToProps,mapDispatchToProps)(ReduxStore);
