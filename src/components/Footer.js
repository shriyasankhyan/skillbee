import React from 'react'

const Footer = ({ type, accessibility, participants }) => {
     var typeUsed = type;
     typeUsed = typeUsed?.charAt(0).toUpperCase() + typeUsed?.substring(1).toLowerCase();
  return (
      <div className='fixed bottom-0 bg-[#2B2B35] flex flex-row w-full text-white space-x-40 p-20 '>
          <div>
                   <div className='text-[#B5B5C2] text-14'>
                  ACCESSIBILITY
              </div>
              <div className='text-24'>
                   {accessibility}
              </div>
          </div>
           
                <div>
              <div className=' text-[#B5B5C2] text-14'>
                  TYPE 
              </div>
              <div className='text-24'>
                 {typeUsed}
              </div>
          </div>
             <div>
              <div className=' text-[#B5B5C2] text-14'>
                  PARTICIPANTS
              </div>
              <div className='text-24'>
                 {participants}
              </div>
          </div>
          
            </div>
  )
}

export default Footer