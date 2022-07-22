// IMPORT ICONS FONT AWESOME
import { FaSignInAlt, FaSignOutAlt, FaUser , FaHome } from 'react-icons/fa'
// IMPORT LINKS TO USE LINKS TO PAGES
import { Link, useNavigate } from 'react-router-dom'
// TO USE STATE
import { useSelector, useDispatch } from 'react-redux'
// BRING IN FUNCTIONS
import { logout, reset } from '../features/auth/authSlice'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  // ON LOGOUT, DISPATCH THE LOGOUT FUNCTION AND RESET STATE
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const onDashboard = () => {
    navigate('/')
  }


  return (
    <header className='header'>

      <div className='logo'>
        <Link to='/'>InvestmentOwl</Link>
      </div>

      <ul>
        {user ? (

          <>          
          
             <li>
              <button className='btn' onClick={onDashboard}>
                <FaHome /> Dashboard
              </button>
            </li>
            
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>

          </>

        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>

    </header>
  )
}

export default Header




// // bring in icons from react-icons font awesome
// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
// // bring in link to have links in pages
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout, reset } from '../features/auth/authSlice'


// function Header() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const {user} = useSelector((state) => state.auth)

//     const onLogout = () => {
//         dispatch(logout())
//         dispatch(reset())
//         navigate('/')
//     }

//     return (
//         <header class='header'>
//             <div className='logo'>
//                 <Link to='/'>GoalSetter</Link>
//             </div>
//             <ul>
//                 {user ? ( 
//                 <li>
//                     <button className='btn' onClick={onLogout}>
//                         <FaSignOutAlt /> Logout
//                     </button>
//                 </li>
//                 ) : (
//                 <>         
//                     <li>
//                         <Link to='/login'>
//                             <FaSignInAlt />Login
//                         </Link>
//                     </li>

//                     <li>
//                         <Link to='/register'>
//                             <FaUser /> Register
//                         </Link>
//                     </li>
//                 </> 
//             ) }
//             </ul>
//         </header>
//     )
// }


// export default Header