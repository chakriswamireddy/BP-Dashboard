import React from 'react'

function DiagList({patient}) {
  console.log(patient?.diagnostic_list)

  return (
    <div>
        <table>
            <tr>
                <th> Problem/Diagnosis </th>
                <th> Description </th>
                <th> Status </th>
            </tr>
            {patient && patient?.diagnostic_list.map((diag,indx) => (
                <tr key={indx}>
                    <td>

                    </td>
                </tr>
            ))}
            
        </table>
    </div>
  )
}

export default DiagList