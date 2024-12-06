import React from 'react'

function DiagList({patient}) {

  return (
    <div className=''>
        <h5> Diagonal List </h5>
        <table>
            <tr>
                <th> Problem/Diagnosis </th>
                <th> Description </th>
                <th> Status </th>
            </tr>
            {patient && patient?.diagnostic_list.map((diag,indx) => (
                <tr key={indx}>
                    <td> {diag.name} </td>
                    <td> {diag.description} </td>
                    <td> {diag.status} </td>
                </tr>
            ))}
            
        </table>
    </div>
  )
}

export default DiagList