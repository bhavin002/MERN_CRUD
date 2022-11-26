import { useEffect, useState } from 'react';
import { getUserById,editUser } from '../service/api';
import './Crud.css';
import { useParams,useNavigate } from 'react-router-dom';
const Edituser = () => {

    const [FormData,setFormData] = useState({
        fname:'',
        lname:'',
        email:'',
        city:''
    })
    const {id} = useParams();
    useEffect(()=>{
        loadUserDetails();
    }, [])
    const loadUserDetails = async () =>{
        const res = await getUserById(id);
        setFormData(res.data);
    }
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
    const navigation  = useNavigate();
    const updateUser = async(e) =>{
        e.preventDefault();
        await editUser(FormData,id);
        navigation("/");

    }
    return (
        <>
            <div>
            <form autoComplete='off'>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" value={FormData.fname}   onChange={InputEvent}  placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" value={FormData.lname}  onChange={InputEvent} placeholder="Your last name.." />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={FormData.email} onChange={InputEvent} placeholder="Your email.." />
                <label htmlFor="city">Country</label>
                <select id="city" name="city" value={FormData.city} onChange={InputEvent} >
                    <option defaultValue={'Choose Your City...'}>Choose Your City...</option>
                    <option value="surat">Surat</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="baroda">Baroda</option>
                </select>
                <input type="submit" onClick={updateUser}  value="Edit"/>
            </form> 
            </div>
        </>
    )
}

export default Edituser;