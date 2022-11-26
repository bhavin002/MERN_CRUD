import './Users.css';
import React,{ useEffect, useState } from 'react';
import { getuser,deletesingle } from '../service/api';
import {  useNavigate } from 'react-router-dom';

const Users = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        let res = await getuser();
        setData(res.data);
    }
    const deleteUser = async (id) =>{
        await deletesingle(id);
        getAllUser();
    }
    const navigate = useNavigate()

    return (
        <>
            <header className="p-md-5 p-2">
                <table className="table table-bordered table-responsive table-striped">
                    <thead className="text-light bg-dark">
                        <tr>
                            <th scope="col">Sr_no</th>
                            <th scope="col">Fname</th>
                            <th scope="col">Lname</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((all)=>{
                            return(
                                <tr key={all._id}>
                            <td>{all._id}</td>
                            <td>{all.fname}</td>
                            <td>{all.lname}</td>
                            <td>{all.email}</td>
                            <td>{all.city}</td>
                            <td><button className='btn btn-primary mx-2' onClick={()=>{navigate(`/edit/${all._id}`)}} >Edit</button></td>
                            <td> <button className='btn btn-danger mx-2' onClick={()=> deleteUser(all._id)}>Delete</button></td>
                            <td><button className='btn btn-success mx-2'>View</button></td>
                        </tr>
                            )
                        })
                    }
                        
                    </tbody>
                </table>
            </header>
        </>
    )
}

export default Users;