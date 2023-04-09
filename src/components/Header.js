import React from 'react'

const Key = ({keyNumber, price}) => {
  return (
    <div className='flex flex-row'>
       <div className=' text-sm font-light inline-block'>{keyNumber}</div>
        <div className='ml-auto mr-72'>
          <div className='text-[#9497A8] '>
             Price
          </div>
          <div className='text-right'>
              {price}
          </div>
            </div>
    </div>
   
  )
}

export default Key