import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory} from "react-router-dom";
import { useParams } from "react-router";

const UpdateCar =(props)=> {
    let [carInfo, setCarInfo] = useState("")
    let {_id} = useParams();
    const history = useHistory()
    
    let[formErrors, setFormErrors] = useState({})

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/cars/${_id}`)
            .then(res=> {
                console.log("res==>", res)
                setCarInfo(res.data.results);
            })
            .catch(err=>{
                console.log("error", err)
            })
        },[]);

    const changeHandler = (e)=> {
        setCarInfo({
        ...carInfo,
        [e.target.name]: e.target.value 
        })
    }

    const editCar = (e)=> {
        e.preventDefault();


        axios.put(`http://localhost:8000/api/cars/${_id}`, carInfo)
            .then(res=>{
                console.log("res on update-->", res)
                setCarInfo(res.data)
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }else {
                    props.setFormSubmitted(!props.formSubmitted)
                history.push('/cars')
                }
            })
            .catch(err=>{
                console.log("err on update-->", err);
            })   
    }

    return (
        <div>
            <p>Editing: {_id}</p>
            <form onSubmit={editCar}>
                <div className="form-group">
                <label htmlFor="">Make:</label>
                    <input type="text" name="make" className="form-control" onChange={changeHandler} value={carInfo.make}/>
                    <p className="text-danger">{formErrors.make?.message}</p>
                </div>
                <div className="form-group">
                <label htmlFor="">Model:</label>
                    <input type="text" name="model" id="" className="form-control" onChange={changeHandler} value={carInfo.model}/>
                    <p className="text-danger">{formErrors.model?.message}</p>
                </div>
                <div className="form-group">
                <label htmlFor="">Year:</label>
                    <input type="number" name="year" id="" className="form-control" onChange={changeHandler} value={carInfo.year}/>
                    <p className="text-danger">{formErrors.year?.message}</p>
                </div>
                <div className="form-group">
                <label htmlFor="">Price:</label>
                    <input type="number" name="price" id="" className="form-control" onChange={changeHandler} value={carInfo.price}/>
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                <label htmlFor="">Color:</label>
                    <input type="text" name="color" id="" className="form-control" onChange={changeHandler} value={carInfo.color}/>
                    <p className="text-danger">{formErrors.color?.message}</p>
                </div>
                <div className="form-group">
                <label htmlFor="">Photo URL:</label>
                    <input type="text" name="picUrl" id="" className="form-control" onChange={changeHandler} value={carInfo.picUrl}/>
                    <p className="text-danger">{formErrors.picUrl?.message}</p>
                </div>
                <input type="submit" value="Update Car"/>
            </form>
        </div>
    )
}

export default UpdateCar;  