import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// import io from 'socket.io-client'

const OneCar =()=> {
    // const [socket] = useState(()=> io(':8000'))

    const{_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory()

    // [count, setCount] = useState(0);
//    const  [disable, setDisable] = useState(false);

    useEffect(()=> {
    axios.get(`http://localhost:8000/api/cars/${_id}`)
        .then(res=> {
            console.log("res==>", res)
            setInfo(res.data.results);
        })
        .catch(err=>{
            console.log("error", err)
        })
    },[])

    const deleteCar =()=>{
        console.log("deleting this car", _id)
        axios.delete(`http://localhost:8000/api/cars/${_id}`)
            .then(res=>{
                console.log(res)
                history.push('/');
            })
            .catch(err=>{
                console.log(err)
            })
    }


    return (
        <div>
            <Link to='/' className='btn btn-info'>Home</Link>
            <button onClick={()=>{deleteCar(_id)}} className="btn btn-danger ">BUY!!{info.make}{info.model}</button>
            <h2>Price: {info.price}</h2>
            <h3>Model: {info.model}</h3>
            <h3>Color: {info.color}</h3>
            <img src={info.picUrl} height="400px" width="600px"/>
            {/* <p>Likes: {count}</p> */}
            {/* <button onClick={()=> setCount(count+1)}>Love It</button> */}
            {/* <button disabled={disable} onClick={() => setDisable(true)}> */}
            {/* <button onClick={() => {LikeDisable}}> */}
        {/* Love It!
      </button> */}
        </div>
    );
};

export default OneCar;