import React, {useState} from 'react'
import './Header.css'

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    return <header className={isHovered ? 'header_enabled' : 'header_disabled'}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
        ⬤ Beavis and Butthead
    </header>
}

export default Header;