import React from 'react'

const Activity = ({activity,link}) => {

  var text = activity;
  text = text?.toUpperCase();
    return (
      <div>
            <h1 className='text-72  font-extrabold'>{text}</h1> 
        <a href={link}>
          <button className='text-14 mt-40   text-[white] p-5 bg-[#D93A31]'>Explore more &rarr;</button>  
           </a>  
            <div className='text-18 mt-14  '>We have more special goods for you</div> 
      </div>
  )
}

export default Activity