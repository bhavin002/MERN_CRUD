import { useState } from 'react';
import './Crud.css';
import {adduser} from "../service/api";
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Adduser = () => {

    const [FormData,setFormData] = useState({
        fname:'',
        lname:'',
        email:'',
        city:''
    })
    const InputEvent = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        setFormData((prev) =>{
            return{
                ...prev,
                [name]: value
            }
        })
    }
    const nevigate = useNavigate();

    const addinpdata = async (e)=>{
        e.preventDefault();
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!FormData.fname || !FormData.lname || !FormData.email || !FormData.city){
            toast.error("Please Fill All The Blank Field...!")
        } 
        else if(!regEx.test(FormData.email)){
            document.getElementById('email_Error').style.display = "block";
        }
        else
        {
            await adduser(FormData);
            toast.success("Contact SuccessFully Added");
            setTimeout(()=>nevigate("/"),3000);
        }
        
    }
    return (
        <>
            <div>
            <form autoComplete='off'>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" value={FormData.fname} onChange={InputEvent}  placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" value={FormData.lname} onChange={InputEvent} placeholder="Your last name.." />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={FormData.email} onChange={InputEvent} placeholder="Your email.." />
                <b id='email_Error' style={{display:'none'}}>Please Enter Valid Email!</b>
                <label htmlFor="city">Country</label>
                <select id="city" name="city" onChange={InputEvent} value={FormData.city}>
                    <option defaultValue={'Choose Your City...'}>Choose Your City...</option>
                    <option value="surat">Surat</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="baroda">Baroda</option>
                </select>
                <input type="submit" className='btn btn-outline-dark' onClick={addinpdata} value="Submit"/>
                <ToastContainer />
            </form> 
            </div>
        </>
    )
}

export default Adduser;