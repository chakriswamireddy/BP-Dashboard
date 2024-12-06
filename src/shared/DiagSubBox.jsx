import React from 'react'
import ArrowDownSvg from "../assets/icons/ArrowDown.svg";

import ArrowUpSvg from "../assets/icons/ArrowUp.svg";


function DiagSubBox({ color, title, value, level, img }) {
    return (
        <div className={`bg-${color}-100 w-1/3 min-w-28  h-36 py-2 rounded-xl  flex flex-col pl-4`} style={{width:'27%'}}>

            <img src={img} className=' size-12 sm:size-14 rounded background-white self-center justify-self-center' />

            <p className='font-normal text-xs sm:text-sm my-1' >  {title}  </p>
            <p className='font-medium text-xs sm:text-sm mb-2'>  {value} </p>
            <p className='font-extralight text-xs flex items-center gap-1'> 
            {level.toLowerCase().includes('lower') &&
            <img src={ ArrowDownSvg  } alt="down" className='size-2' />
            
            }

                   {level} </p>
            {/* <img src={level.toLowerCase().includes('lower') ? ArrowDownSvg :  ArrowUpSvg } alt="" /> */}
            

        </div>
    )
}

export default DiagSubBox