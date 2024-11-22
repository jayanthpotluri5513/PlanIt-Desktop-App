import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Menu, X } from 'lucide-react'
import './Navbar.css'
import Temple from '../assets/temple.svg'

function Navbar() {
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <img src={Temple} alt="PlanIt logo" />
                    <span>PlanIt</span>
                </Link>

                <div className={`nav-elements ${isMenuOpen && 'active'}`}>
                    <ul>
                        {!user && (
                            <li><Link to="/" onClick={toggleMenu}>Home</Link></li> // Show Home link only when user is NOT logged in
                        )}
                        {!user && (
                            <>
                                <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                                <li><Link to="/signup" onClick={toggleMenu}>Signup</Link></li>
                            </>
                        )}
                        {user && (
                            <li>
                                {!isPending && <button className='btn logout-btn' onClick={logout}>Logout</button>}
                                {isPending && <button className='btn logout-btn' disabled>Logging out...</button>}
                            </li>
                        )}
                    </ul>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
