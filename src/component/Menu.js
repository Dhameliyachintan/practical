import React, { useState } from 'react';
import { menuItemsdata } from '../constant'; // Assuming you have a CSS file for styles

export const Menu = () => {
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSubMenuClick = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header-menu'>
            <div className="logo">
                <h1>My Website</h1>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <nav className={isMenuOpen ? 'nav-open' : ''}>
                <ul className='ul-class'>
                    {menuItemsdata.map((menuItem, index) => (
                        <li key={index} className='header-item'>
                            {menuItem.link ? (
                                <a href={menuItem.link}>{menuItem.name}</a>
                            ) : (
                                <span onClick={() => handleSubMenuClick(index)} className='cursor'>
                                    {menuItem.name}
                                </span>
                            )}
                            {menuItem.submenu && openSubMenu === index && (
                                <ul>
                                    {menuItem.submenu.map((submenuItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a href={submenuItem.link}>{submenuItem.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {menuItem.submenu2 && openSubMenu === index && (
                                <ul>
                                    {menuItem.submenu2.map((submenuItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a href={submenuItem.link}>{submenuItem.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Menu;
