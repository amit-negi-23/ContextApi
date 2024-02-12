import React, { useState, useContext } from 'react'
import string from '../constant/string'
import { AppContext } from '../Store/context'
export default function AddUser() {

  const { dispatch } = useContext(AppContext)

  const [data, setData] = useState(initialState())

  function initialState() {
    return {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      id: null
    };
  }

  function handleInput(event) {
    setData((prev) => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  function handleAddUser(e) {
    // e.preventDefault()
    data.id = Math.random();
    dispatch({ type: string.ADD_USER, payload: { newUser: data } })
    
  }

  function handleSubmit(e){
      e.preventDefault();
      if(!data.fname || !data.lname || !data.email || !data.phone || !data.address){
        alert("All fields are mendatory!")
      }
      else{
        setData(initialState())
      }
  }
// console.log(!data.fname,!data.lname, !data.email, !data.phone, !data.address)
  const { fname, lname, email, phone, address } = data;
  return (
    <div className='container border mt-5'>
      <form className='w-50 m-auto mt-3' onSubmit={handleSubmit}>
        <div className='row mb-3 '>
          <div className='col-6'>
            <label htmlFor='fname' className='form-label'>First Name</label>
            <input type='text' name='fname' value={fname} placeholder='Enter first name' className='form-control' id='fname' onChange={handleInput} />
          </div>
          <div className='col-6'>
            <label htmlFor='lname' className='form-label'>Last Name</label>
            <input type='text' name='lname' value={lname} placeholder='Enter last name' className='form-control' id='lname' onChange={handleInput} />
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor='email' className='form-label'>Email Address</label>
            <input type='email' name='email' value={email} placeholder='your@email.com' className='form-control' id='email' onChange={handleInput} />
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-12'>
            <label htmlFor='phone' className='form-label'>Mobile No</label>
            <input type='tel' name='phone' value={phone} placeholder='Enter mobile number' className='form-control' id='phone' onChange={handleInput} />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <label htmlFor='addr' className='form-label'>Address</label>
            <input type='text' name='address' value={address} placeholder='Enter yor address' className='form-control' id='addr' onChange={handleInput} />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 text-center'>
            <button className='btn btn-primary w-25' onClick={handleAddUser}>Add user</button>
          </div>
        </div>
      </form>

    </div>
  )
}
