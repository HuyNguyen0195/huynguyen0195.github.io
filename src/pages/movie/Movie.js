import React, { useEffect, useState } from "react"
import CardMovie from "../../components/CardMovie";
import CarouseMovie from "../../components/CarouselMovie";
import SideBar from "../../components/SideBar";

const url = "https://api.sampleapis.com/movies/animation"
export default function Movie(){
    const [movieList,setMovieList] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setMovieList(json))
        .catch(err=>console.log(err))
    },[]);
    //console.log(movieList);
    return (
        <div className="container-fuild">
            <div className="row">
                <h1>this is movie page</h1>
            </div>
            <div className="row">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <SideBar/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <CarouseMovie
                                    items = {movieList.filter(movie=>movie.id<5)}
                                /> 
                            </div>
                            <div className="row">
                                Newest Movies
                            </div>
                            <div className="row">
                                <div className="card-group">
                                 {movieList && movieList.filter(movie=>movie.id<5).map((movie)=>(
                                    <CardMovie 
                                    id={movie.id} 
                                    title={movie.title} 
                                    posterURL={movie.posterURL} />
                                ))} 
                                </div>
                            </div>
                            <div className="row">
                                New Realse Movies
                            </div>
                            <div className="row">
                                <div className="card-group">
                                 {movieList && movieList.filter(movie=>movie.id<5).map((movie)=>(
                                    <CardMovie 
                                    id={movie.id} 
                                    title={movie.title} 
                                    posterURL={movie.posterURL} />
                                ))} 
                                </div>
                            </div>
                        </div>
                        <div className="col-4 bg-danger">

                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}