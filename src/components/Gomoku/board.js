import Box from "./Box";
const rows_max=15;
const cols_max=15;
const pix=30;
const style = {
	width: `${(cols_max)*pix}px`,
	height: `${(rows_max)*pix}px`,
	margin: "0 auto",
	display: "grid",
	gridTemplate: `repeat(${rows_max}, ${pix}px) / repeat(${cols_max}, ${pix}px)`,
};

const Board = (props) => (
    <div style={style}>
    {[...Array(rows_max*cols_max)].map((_, pos) => 
	<Box key={pos} 
	name={pos} 
	onClick={()=>props.onClick(pos)} 
	value={props.value[pos]}/>)}
    </div>
)

export default Board