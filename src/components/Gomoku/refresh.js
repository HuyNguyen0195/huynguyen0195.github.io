import React from 'react'

const style = {
	margin: "0 auto",
	display: "grid",
	fontSize: "30px",
	fontWeight: "800",
};

const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh