import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from 'react-icons/fa'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Welcome() {

    const navigate = useNavigate()

    const onRegister = () => {
        navigate('/register')
    }
    const onLogin = () => {
        navigate('/login')
    }

  return (
    <>
     
    <section className='welcome-main-section'>
        <section className='welcome-container'>
            <h1>
            The Easiest Way to Research & Analyze Portfolios of 
            the World's Best Investors
            </h1>

            <h4>
            InvestmentOwl provides you the access and tools to invest like a Wall Street money manager.
            Search and view SEC 13F Filings — the quarterly reports that list certain equity assets held 
            by institutional investment managers.
            </h4>
        </section>

        <section>
            
        </section>
    </section>



    <section className='welcome-second-section'>
        <h2>GET STARTED NOW</h2>
        
        <button className='welcome-btn' onClick={onRegister}>
                <FaUser /> Create an account
        </button>

        <h3>or</h3>

        <button className='welcome-btn' onClick={onLogin}>
                <FaSignInAlt /> Login
        </button>
    </section>



    <footer className='welcome-footer-container'>
        <h4>Have suggestions or questions?</h4>
        <h5>send them and we will get back to you as soon as possible</h5>
        <button className='contact-btn'>
            <a href="">
                Contact us
            </a>
        </button>
    </footer>

    </>
  )
}

export default Welcome
