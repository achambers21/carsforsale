import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const CarForm =(props)=> {

let [make, setMake] = useState("");
let [model, setModel] = useState("");
let [year, setYear] = useState("");
let [price, setPrice] = useState("");
let [color, setColor] = useState("");
let [picUrl, setPicUrl] = useState("");

let[formErrors, setFormErrors] = useState({})

const history = useHistory();

const createCar = (e)=> {
    e.preventDefault();
    let formInfo = {make,model,year,price,color,picUrl};

    axios.post("http://localhost:8000/api/cars/", formInfo)
        .then(res=>{
            console.log(res);
            if(res.data.error){
                setFormErrors(res.data.error.errors);
            }else {
                props.setFormSubmitted(!props.formSubmitted)

                setMake("");
                setModel("");
                setYear("");
                setPrice("");
                setColor("");
                setPicUrl("");
                setFormErrors({});
                
                history.push("/");
            }
        })
        .catch(err=>{
            console.log("error", err)
        })
}

return (
    <div>
        <form onSubmit={createCar}>
            <div className="form-group">
            <label htmlFor="">Make</label>
                <input type="text"name="" id="" className="form-control" onChange={(e)=>{setMake(e.target.value)}} value={make}/>
                <p className="text-danger">{formErrors.make?.message}</p>
            </div>
            <div className="form-group">
            <label htmlFor="">Model</label>
                <input type="text"name="" id="" className="form-control" onChange={(e)=>{setModel(e.target.value)}} value={model}/>
                <p className="text-danger">{formErrors.model?.message}</p>
            </div>
            <div className="form-group">
            <label htmlFor="">Year</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setYear(e.target.value)}} value={year}/>
                <p className="text-danger">{formErrors.year?.message}</p>
            </div>
            <div className="form-group">
            <label htmlFor="">Price</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
                <p className="text-danger">{formErrors.price?.message}</p>
            </div>
            <div className="form-group">
            <label htmlFor="">Color</label>
                <input type="text"name="" id="" className="form-control" onChange={(e)=>{setColor(e.target.value)}} value={color}/>
                <p className="text-danger">{formErrors.color?.message}</p>
            </div>
            <div className="form-group">
            <label htmlFor="">Photo URL</label>
                <input type="text"name="" id="" className="form-control" onChange={(e)=>{setPicUrl(e.target.value)}} value={picUrl}/>
                <p className="text-danger">{formErrors.picUrl?.message}</p>
            </div>
            <input type="submit" value="Add a Car!" />
        </form>
    </div>
)
}

export default CarForm;