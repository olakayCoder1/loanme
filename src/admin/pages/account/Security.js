import React from 'react'

function Security() {
  return (
    <div className=' bg-white p-6'>
      <form className=' flex flex-col gap-4'>
        <h2 className=' font-bold text-gray-800'>Change Password</h2>
        <div>
            <label for="helper-text" className="text-input-label ">Current Password</label>
            <input type="password" className=' input-primary'  placeholder="******" />
        </div>
        <div>
            <label for="helper-text" className="text-input-label ">New Password</label>
            <input type="password" className=' input-primary'  placeholder="******" />
        </div>
        <div>
            <label for="helper-text" className="text-input-label ">Confirm Password</label>
            <input type="password" className=' input-primary'  placeholder="******" />
        </div>
        <button type='button' className=' btn-primary w-fit p-2 font-medium text-sm'>Save changes</button> 
      </form>

      <div className=' border-t mt-8 py-8'>
        <button type='button' className=' btn-primary w-fit p-2 font-medium text-sm bg-red-600'>Deactivate your account</button> 
      </div>
    </div>
  )
}

export default Security
