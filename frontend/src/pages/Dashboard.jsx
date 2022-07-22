
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import CompanyForm from '../components/CompanyForm'
import CompanyItem from '../components/CompanyItem'
import Spinner from '../components/Spinner'

import { getCompanies, reset } from '../features/companies/companySlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // State for the user part
  const { user } = useSelector((state) => state.auth)
  // State for the companies part
  const { companies, isLoading, isError, message } = useSelector(
    (state) => state.companies
  )

  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/welcome')
    }

    // dispatch getcompanies to get companies from backend and put into 'companies' const var
    dispatch(getCompanies())

    // reset the state when leaving the dashboard; want companies to clear
    return () => {
      dispatch(reset())
    }
  }, 
  [user, navigate, isError, message, dispatch]
  )

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>

      <CompanyForm />

      <section className='content'>
        {companies.length > 0 ? (
          <div className='goals'>
            {companies.map((company) => (
              <CompanyItem key={company._id} company={company} />
            ))}
          </div>
        ) : (
          <h3>No companies found</h3>
        )}
      </section>

      
    </>
  )
}

export default Dashboard



