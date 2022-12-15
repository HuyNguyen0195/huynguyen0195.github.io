import React from "react";

const Pagination = ({listsPerPage, totalLists, paginate} ) =>{
    const pageNumber = [];
    for(let i=1; i<= Math.ceil(totalLists/listsPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <nav>
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
        </nav>
    )
}

export default Pagination;