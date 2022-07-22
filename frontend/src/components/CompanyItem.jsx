
import { useDispatch } from 'react-redux'

// Bring delete company function
import { deleteCompany } from '../features/companies/companySlice'

function CompanyItem({ company }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      
      <div>{new Date(company.createdAt).toLocaleString('en-US')}</div>
      

      <h2>{company.companyFilingName}</h2>
      <p>CIK: {company.cik} </p>
      <p>Period: {company.reportingPeriod}</p>

      <table>
        <thead>        
            <tr>
                <th>Ticker</th>
                <th>Company</th>
                <th>Shares <span>(000)</span></th>
                <th>Value <span>(000)</span></th>
            </tr>
        </thead>   
            { company.filingInfo.map( item => 
                <>
                <tbody>
                    <tr>
                        <td> {item.tickercusip} </td>
                        <td> {item.nameOfIssuer} </td>
                        <td> { Math.trunc((item.shares/1000)).toLocaleString("en-US") } </td>
                        <td> { (item.value/1000).toLocaleString("en-US") } </td>
                    </tr>
                </tbody>
                </>
                )
            }
        </table>




      <button onClick={() => dispatch(deleteCompany(company._id))} className='close'>
        X
      </button>
    
    </div>
  )
}

export default CompanyItem







// import {useDispatch} from 'react-redux'
// import {deleteGoal} from '../features/goals/goalSlice'

// function GoalItem ( {goal} ) {
//     const dispatch = useDispatch()

//     return (
//         <div className="goal">
//             <div>
//                 {new Date(goal.createdAt).toLocaleString('en-US')}
//             </div>
//             <h2>
//                 {goal.text}
//                 <button onClick={ () => dispatch(deleteGoal(goal._id))} 
//                 className="close">X</button>
//             </h2>
//         </div>
//     )
// }




// export default GoalItem