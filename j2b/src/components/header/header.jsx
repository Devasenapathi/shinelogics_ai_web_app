import React, { useEffect, useState } from 'react'
import './header.css'

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { // Scroll threshold for sticky
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`header_main ${isSticky ? 'sticky' : ''}`}>
        <h2>Juice2bag</h2>
        <div className='header_content1'>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>My Orders</li>
          </ul>
        </div>
      </div>
  )
}

export default Header