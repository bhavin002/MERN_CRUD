import React, { useEffect, useState } from 'react';
import { IoMdCreate, IoIosBeaker } from "react-icons/io";
import { useParams,useNavigate } from 'react-router-dom';
import { userById } from '../service/api';

const Details = () => {
    const [details, setDetails] = useState({
        fname:'',
        lname:'',
        email:'',
        city:''
    });
    const { id } = useParams();
    useEffect(() => {
        getDetails();
    }, [])
    const getDetails = async () => {
        const res = await userById(id);
        setDetails(res.data);
    }
    const navigate = useNavigate();
    return (
        <>
            <header className='.container d-flex justify-content-center my-5'>
                <div className="row">
                    <div className="col-12 p-5" style={{ border: '2px solid black', borderRadius: '9px', backgroundColor: '#f2f2f2' }} >
                        <h3 className='border-bottom border-2 border-dark pb-2'>Welcome</h3>
                        <p style={{ fontSize: '25px' }} className='mt-4'>Fname:<span style={{ fontSize: '16px' }}>{details.fname}</span></p>
                        <p style={{ fontSize: '25px' }}>Lname:<span style={{ fontSize: '16px' }}>{details.lname}</span></p>
                        <p style={{ fontSize: '25px' }}>Email:<span style={{ fontSize: '16px' }}>{details.email}</span></p>
                        <p style={{ fontSize: '25px' }}>City:<span style={{ fontSize: '16px' }}>{details.city}</span></p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Details;