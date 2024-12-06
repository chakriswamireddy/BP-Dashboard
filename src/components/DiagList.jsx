import React from 'react'

function DiagList({ patient }) {

    return (
        <div className='bg-white rounded-xl p-4 w-full h-48'>
            <h5> Diagonal List </h5>
            {/* <table className='w-full pl-2 table-auto mt-2 '>
            <thead className='bg-blue-500    rounded-lg font-medium text-sm px-2 my-2' >

            
            <tr   >
                <td> Problem/Diagnosis </td>
                <td> Description </td>
                <td> Status </td>
            </tr>
            </thead>
            <tbody>

            
            {patient && patient?.diagnostic_list.map((diag,indx) => (
                <tr key={indx} className='text-xs font-normal mb-1'>
                    <td> {diag.name} </td>
                    <td> {diag.description} </td>
                    <td> {diag.status} </td>
                </tr>
            ))}
            </tbody>
            
        </table> */}

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
                        <div className='w-1/6 border'>{diag.status}</div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default DiagList