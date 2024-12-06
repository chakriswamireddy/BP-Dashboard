import React from 'react'

function DiagList({ patient }) {

    return (
        <div className='bg-white rounded-xl p-4 w-full h-1/4'>
            <h5> Diagonal List </h5>

            <div className="w-full pl-2 mt-2 h-32 overflow-y-auto">
                
                <div className="grid grid-cols-3 bg-violet-100 rounded-full font-medium text-xs mb-1 sm:text-sm px-2 py-1"
                 style={{ gridTemplateColumns: "1.5fr 3fr 1fr" }}>
                    <div>Problem/Diagnosis</div>
                    <div>Description</div>
                    <div>Status</div>
                </div>

                
                {patient && patient?.diagnostic_list.map((diag, indx) => (
                    <div
                        key={indx}
                        className="grid grid-cols-3 text-xs font-normal py-1  border-b border-gray-300 px-2     " 
                        style={{ gridTemplateColumns: "1.5fr 3fr 1fr" }}>
                        <div>{diag.name}</div>
                        <div>{diag.description}</div>
                        <div className='w-1/6 '>{diag.status}</div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default DiagList