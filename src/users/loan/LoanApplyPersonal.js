import React from 'react'
import { useNavigate } from "react-router-dom";
import ApplicationDashboard from '../../admin/pages/dashboard/ApplicationDashboard';

function LoanApplyPersonal({user , loanApplicationData,handleValueChange}) {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Personal Information</p>
            <p>1/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">First Name</label>
            <input type="text"    placeholder="Olanrewaju" className='input-primary'  disabled value={loanApplicationData.first_name}/> 
            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Last Name</label>
            <input type="text"  className=" input-primary"   placeholder="AbdulKabeer" disabled value={loanApplicationData.last_name}/> 
            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Email</label>
            <input type="email"  className=" input-primary"   placeholder="AbdulKabeer" disabled value={loanApplicationData.email}/> 

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Date of birth</label>
            <input type='date' disabled={user && user.date_of_birth}    className=" input-primary"  onChange={(e)=> handleValueChange('date_of_birth', e.target.value)}  value={loanApplicationData.date_of_birth}/> 

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Gender</label>
            <select id="bank" value={loanApplicationData.gender}  onChange={(e)=> handleValueChange('gender', e.target.value)}  className=" input-primary"  disabled={user && user.gender}  >
            <option selected disabled hidden></option>
            <option value="Male" 
                selected={loanApplicationData.gender === 'Male'} 
                >Male</option>
            <option value="Female" 
                selected={loanApplicationData.gender === 'Female'}
                >Female</option>
            </select>

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Marital Status</label>
            <select value={loanApplicationData.marital_status}  onChange={(e)=> handleValueChange('marital_status', e.target.value)} className="input-primary"   >
            <option selected disabled hidden></option>
            <option value="Single" 
                selected={loanApplicationData.marital_status === 'Single'}
                >Single</option>
            <option value="Married" 
                selected={loanApplicationData.marital_status === 'Married'}
                >Married</option>
            <option value="Divorce" 
                selected={loanApplicationData.marital_status === 'Divorce'}
                >Divorce</option>
            </select>
 
            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Number of children</label>
            <select  // value={loanApplicationData.children}  
                onChange={(e)=> handleValueChange('children', e.target.value)} className=" input-primary"   >
            <option selected disabled hidden>-</option>
            <option value="1 child" 
                selected={loanApplicationData.children === '1 child'}
                >1 child</option>
            <option value="2 children" 
                selected={loanApplicationData.children === '2 children'}
                >2 children</option>
            <option value="Above 2" 
                selected={loanApplicationData.children === 'Above 2'}
                >Above 2</option>
            </select>
            <div className=' w-full py-6'>
                <button type="button" onClick={()=> navigate('education-employment')} 
                    className=" btn-primary">CONTINUE</button>
            </div>
        </form>
    </div>
  )
}

export default LoanApplyPersonal
