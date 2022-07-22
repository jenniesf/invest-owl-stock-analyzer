
// BRING IN USESTATE SINCE WE'LL HAVE FORM FIELDS - each will have component level state
import { useState, useEffect } from 'react'
// useSlector - to select something the state - user, isLoading etc.
// useDispatch - to dispatch a function, reset, asyncthunk function
import { useSelector, useDispatch } from 'react-redux'
// bring in useNav to redirect
import { useNavigate } from 'react-router-dom'
// bring in toast to alert
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  // SET STATE FOR THE FORM
    // SETFORMDATA USED TO EDIT STATE 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  // DESTRUCTURE THE FIELDS FROM FORM
  const { name, email, password, password2 } = formData
  // initialize both functions
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Destructure what we want from our state using useSelector
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  // useEffect when any of the state changes
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  // ONCHANGE FUNCTION -- WHEN CHANGE FORM STATE
    // SETFORMDATA sets entire form as one object, 
    // do not need to setstate for each form field
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // ONSUBMIT FUNCTION -- WHEN SUBMIT REGISTER FORM
  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>

        </form>
      </section>
    </>
  )
}

export default Register



