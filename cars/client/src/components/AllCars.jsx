import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";  
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AllCars =(props)=> {

    const [carList, setCarList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(()=> {
        axios.get("http://localhost:8000/api/cars")
            .then(res=> {
                console.log("response is this-->", res.data.results)
                setCarList(res.data.results);
            })
            .catch(err=> {
                console.log("error", err)
            })
    },[props.formSubmitted])

    return (
        <div>
            <p>Search For a Car: <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" name="" placeholder="Search.."/></p>
            {
                carList.filter((carObj)=>{
                    return carObj.make.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((carObj)=>{
                    return (
                        <>
                        <Card style={{ width: '30rem' }} key={carObj._id}>
                                <Card.Img variant="top" src={carObj.picUrl} />
                            <Card.Body>
                                <Card.Title>{carObj.make}</Card.Title>
                                <Card.Text>{carObj.model}</Card.Text>
                                <Card.Text>{carObj.color}</Card.Text>
                                <Button variant="primary" href={`/cars/${carObj._id}`}>Check It Out</Button>
                            </Card.Body>
                        </Card>
                        </>   
                    )
                })
            }
        </div>
    );
};

    export default AllCars;