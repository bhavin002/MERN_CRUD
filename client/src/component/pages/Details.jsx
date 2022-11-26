import React from 'react';
import {IoMdCreate, IoIosBeaker } from "react-icons/io";


const Details = () => {
    return (
        <>
            <header className='.container d-flex justify-content-center my-5'>
                <div className="row">
                    <div className="col-12 p-5" style={{ border: '2px solid black', borderRadius: '9px',backgroundColor: '#f2f2f2'}} >
                        <h3 className='border-bottom border-2 border-dark pb-2'>Welcome <span><button className='btn' style={{ fontSize: '30px' }}><IoMdCreate /></button>
                            <button className='btn' style={{ fontSize: '30px' }}><IoIosBeaker /></button></span> </h3>
                        <p style={{ fontSize: '25px' }} className='mt-4'>Fname:<span style={{ fontSize: '16px' }}>Bhavin</span></p>
                        <p style={{ fontSize: '25px' }}>Lname:<span style={{ fontSize: '16px' }}>Vasavada</span></p>
                        <p style={{ fontSize: '25px' }}>Email:<span style={{ fontSize: '16px' }}>bhavin002@gmail.com</span></p>
                        <p style={{ fontSize: '25px' }}>City:<span style={{ fontSize: '16px' }}>Surat</span></p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Details;