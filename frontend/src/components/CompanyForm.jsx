// COMPANY FORM PAGE FOR THE FRONTEND USER TO SEARCH FOR CIK AND REPORTING PERIOD

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCompany } from '../features/companies/companySlice'


function CompanyForm() {

  // const [text, setText] = useState('')

    // SET STATE FOR THE FORM
    const [cik, setCik] = useState('')
    const [reportingPeriod, setReportingPeriod] = useState('')

    // const [text, setText] = useState({
    //   cik: '',
    //   reportingPeriod: '',
    // })
    
    // DESTRUCTURE THE FIELDS FROM FORM
    // const { cik, reportingPeriod } = text

const dispatch = useDispatch()


    // ONCHANGE FUNCTION -- WHEN CHANGE FORM STATE
    // const onChange = (e) => {
    
    //   setCik((prevState) => ({
    //     ...prevState,
    //     [e.target.name]: e.target.value,
    //     })
    //   )

    //   setReportingPeriod((prevState) => ({
    //     ...prevState,
    //     [e.target.name]: e.target.value,
    //     })
    //   )

    //   // setText((prevState) => ({
    //   //   ...prevState,
    //   //   [e.target.name]: e.target.value,
    //   //   })
    //   // )
    // }
        

    // ONSUBMIT FUNCTION -- WHEN SUBMIT REGISTER FORM
    const onSubmit = (e) => {
      e.preventDefault()

      const userData = {
        cik,
        reportingPeriod,
      }
      console.log(userData)
      dispatch(createCompany(userData))  

      setCik('')
      setReportingPeriod('')
      // setText('')           
    }



  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   dispatch(createCompany({ text }))
  //   setText('')
  // }


  return (
    <section className='form'>
      <form onSubmit={onSubmit}>

        <div className='form-group'>
          <label htmlFor='text'>Company CIK</label>
          <input
            type='text'
            name='cik'
            id='cik'
            value={cik}
            placeholder='Enter CIK'
            // onChange={onChange}
            onChange={(e) => setCik(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='text'>Reporting Period</label>
          <input
            type='text'
            name='reportingPeriod'
            id='reportingPeriod'
            value={reportingPeriod}
            placeholder='eg. 2021-12-31'
            // onChange={onChange}
            onChange={(e) => setReportingPeriod(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Company
          </button>
        </div>

      </form>
    </section>
  )
}

export default CompanyForm






// import {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {createGoal} from '../features/goals/goalSlice'

// function GoalForm () {

//     const [text, setText] = useState('')
    
//     const dispatch = useDispatch()

//     const onSubmit = e => {
//         e.preventDefault()

//         dispatch( createGoal({text}))
//         setText('')
//     }

//     return (
//         <section className='form'>
//             <form onSubmit={onSubmit}>

//                 <div className='form-group'>
//                     <label htmlFor="text">Goal</label>
//                     <input type="text" 
//                             name="text" 
//                             id="text" 
//                             value={text} 
//                             onChange={ (e) => setText(e.target.value)}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <button className='btn btn-block' type='submit'>
//                         Add Goal
//                     </button>
//                 </div>
//             </form>

//         </section>

//     )
// }



// export default GoalForm