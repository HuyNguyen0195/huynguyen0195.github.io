import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import {MDBTable,MDBTableHead,MDBTableBody,MDBBtn,MDBInput} from 'mdb-react-ui-kit'
export default function Mongo() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [make,setMake] = useState('');
const [model,setModel] = useState('');


  useEffect(() => {
    const getData = async ()=>{
      try{
        const response= await axios.get(`http://localhost:8080`);
      setData(response.data);
      console.log(response);
      setError(null);
      }catch(err){
        setError(err.message);
        setData(null);
      }finally{
        setLoading(false);
      }
    };
    getData();
  },[model]);

   const handeSubmit = async (e)=>{
    e.preventDefault();
      if(make!== '' && model!== ''){
        await axios.post(`http://localhost:8080/post`,{make:make,model:model});
        setMake('');setModel('');
      }else {
        alert('input null')
      };
   }
   const handeDelete = async (e)=>{
    e.preventDefault();
    if(make!== '' || model!== ''){
      await axios.delete(`http://localhost:8080/delete`,{data:{model:model}});
      //setMake('');setModel('');
    }else {
      alert('input null')
    };
   }

  return <div className="App">
    <h1>API MongoDB</h1>
    <h1>{`${make} ${model} `} </h1>
    <div>
    <form >
      <MDBInput type={'text'} 
      value={make}
      placeholder='make'
      onChange={(e)=>{setMake(e.target.value)}}/>
      <MDBInput type={'text'} 
      value={model}
      placeholder='model'
      onChange={(e)=>{setModel(e.target.value)}}/>
    </form>
    <MDBBtn onClick={handeSubmit} value={'submit'}>Submit</MDBBtn>
    <MDBBtn onClick={handeDelete} value={'delete'} color='danger'>Delete</MDBBtn>
    <MDBBtn value={'update'} color='warning'>Update</MDBBtn>

    </div>

    {loading && <div> a moment please......</div> }
    {error && <div>{`there is error ${error}`}</div>}
    <MDBTable bordered borderColor="primary" >
      <MDBTableHead dark>
        <tr>
          <th>Make</th>
          <th>Model</th> 
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {data && data.map(({_id,make,model})=>(
      <tr>
        <th>{make}</th>
        <th>{model}</th>
      </tr>
      ))}
          </MDBTableBody>
     </MDBTable>
    </div>
    ;

}