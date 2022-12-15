import React from "react"
import { json } from "react-router-dom"

const url = "http://api.carmd.com/v3.0/engine?year=2015&make=ACURA&model=RLX"
const url2 = "http://api.carmd.com/v3.0/year"
export default function Nopage(){

    return (
        <div>
            <h1>this wrong page</h1>
            <img src="https://unsplash.com/photos/xIodDks1cQ8" />
        </div>
    )
}