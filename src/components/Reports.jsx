import React from 'react'
import downloadSvg from "../assets/icons/download.svg";


function Reports({ patient }) {
    return (
        <div className='bg-white py-3 px-4 rounded-lg'>
            <p className='text-md mb-1'>Lab Reports </p>

            <div className='flex flex-col h-20 overflow-y-auto gap-1'>


                {patient?.lab_results.map((report, indx) => (
                    <div key={indx} className='flex justify-between px-2 mb-0.5  ' >
                        <p className='font-light text-xs' > {report} </p>
                        <img src={downloadSvg} alt="download" className='size-3' />
                    </div>
                ))}

                


            </div>

        </div>
    )
}

export default Reports