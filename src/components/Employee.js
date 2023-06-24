import React from 'react'

import EditEmployee from './EditEmployee'

const Employee = (props) => {
  return (
    <>
      <div className="py-8 px-8 max-w-sm mx-4 my-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block object-cover object-fill  mx-auto h-[100px] w-[100px] rounded-full sm:mx-0 sm:shrink-0" src={props.image} alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {props.name || 'name of the employee'}
            </p>
            <p className="text-slate-500 font-medium">
              {props.role || 'role of the employee'}
            </p>
          </div>
          <EditEmployee />

        </div>
      </div>
    </>
  )
}

export default Employee