import React from 'react'

const style = {
	margin: "0 auto",
	display: "grid",
    fontSize: "30px",
	fontWeight: "800",
	textAlign:'center' 
};

const Message = (props) => <h1 name={"msg"} style={style}>{props.value}</h1>	

export default Message