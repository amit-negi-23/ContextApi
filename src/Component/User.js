import React, { useContext } from 'react'
import { AppContext } from '../Store/context'
import string from '../constant/string'
import '../style.css'

export default function User({userData}) {
    const { dispatch } = useContext(AppContext)

    function handleRemoveUser(){
            dispatch({type: string.REMOVE_USER, payload: {id: userData.id}})
    };
    return (
        (userData.fname && userData.lname && userData.email && userData.phone && userData.address)?<div className='col-4 border border-3 w-100 p-3'>
        <h4>Name:-{userData.fname} {userData.lname}</h4>
        <p>Email:-{userData.email}</p>
        <p>Mob No:-{userData.phone}</p>
        <p>Address:-{userData.address}</p>
        <div className='text-center'>
            <button className='btn btn-danger ' onClick={handleRemoveUser}>Remove User</button>
        </div>
    </div>:""
    )
}
