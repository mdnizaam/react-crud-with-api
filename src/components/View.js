import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams,useHistory } from 'react-router-dom';

const View = () => {
    const {id}=useParams();
    // console.log(id);
    const[user,setUser]=useState([]);
    const history=useHistory()

    useEffect(()=>{
        fetchUser();

    },[id]);

    const fetchUser=async()=>{
        try{
        const result=await axios.get(`http://localhost:5000/Users/${id}`);
        // console.log(result.data);
        setUser(result.data)

        }catch(err){
            console.log("Something Wrong");
        }
    }

    const clickToBackHandler=()=>{
        history.push("/")
    }

    return <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>

                    <h1>User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Full Name</th>
                                <th>Email</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div>
        <button className='btn btn-primary' onClick={clickToBackHandler}>Back To Home</button>

            </div>
        </div>
    </div>;
};

export default View;
