import React from "react";

export default function CardMovie({id,title,posterURL}){
    return (
            <div className="card border-primary" style={{width: "10rem"}} key={id}>
                <img src={posterURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href="#/" className="btn btn-primary">Watch</a>
                </div>
            </div>
    )
}

