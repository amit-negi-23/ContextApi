import React, { useContext } from 'react'
import User from './User';
import { AppContext } from '../Store/context'

export default function UserList() {
  const {
    store: { users },
  } = useContext(AppContext);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='text-center'>Available User</h3>
        </div>
      </div>
      <div className='d-grid gap-3 user-grid-container'>
        {users.map((user) => {
          return(<User key={user.id} userData={user} />)
        })}
      </div>
    </div>
  )
}
