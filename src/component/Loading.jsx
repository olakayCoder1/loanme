import React from 'react'
import spinner1 from '../assets/Spinner-1.svg'
import spinner2 from '../assets/Spinner-2.png'
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className=' w-full h-full bg-gray-500'>
        <div>
            <img src={spinner2} /> 
        </div>
    </div>
  )
}



export const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={667} width={375} />
);
 


export default Loading
