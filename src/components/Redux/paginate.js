import React from "react";

export default function Paginate({listsPerPage, totalLists, paginate} ){
    const pageNumber = [];
    for(let i=1; i<= Math.ceil(totalLists/listsPerPage); i++){
        pageNumber.push(i);
    }
{/* <nav>
            <ul className="pagination">
                {pageNumber.map(num=>(
                    <li key={num} className='page-item' >
                        <a 
                        className="page-link"
                        onClick={()=>paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav> */}
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link">Previous</a></li>
                {pageNumber.map(num=>(
                    <li key={num} className='page-item' >
                        <a 
                        className="page-link"
                        onClick={()=>paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))}
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}

