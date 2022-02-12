import React, { useState, useEffect } from 'react';
import List from './List';
import axios
    from 'axios';
const Home = () => {

    const [userField, setUserField] = useState({
        fullname: "",
        email: ""
    });

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        console.log(userField);

    }
    const [loading,setLoading]=useState()

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {

            await axios.post("http://localhost:5000/Users/", userField);

            setLoading(true);

        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return <Home/>
    }


    return (
        <>
            <h1 className='bg-info w-100 d-flex justify-content-center p-3 text-white'>Home Component</h1>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Add Your Detail</h1>
                        <form>
                            <div className="mb-3 mt-3">
                                <label htmlFor="fullname" className="form-label"> Full Name:</label>
                                <input type="text" className="form-control"
                                    id="fullname" placeholder="Enter Your Full Name"
                                    name="fullname" onChange={e => changeUserFieldHandler(e)} />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email"
                                    placeholder="Enter email"
                                    name="email" onChange={e => changeUserFieldHandler(e)} required/>
                            </div>


                            <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add User</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <List />
                    </div>
                </div>

            </div>
        </>
    )
};

export default Home;
