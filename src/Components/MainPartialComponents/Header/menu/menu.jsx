import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import {FaBars} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import './menu.css'
import ResponsiveMenu from './ResponsiveMenu/responsiveMenu';

const Menu = (props) => {
    const [ishover, setIshover] = useState(false);
    const [showResMenu, setShowResMenu] = useState(false);

    const handleHover = () => {
        setIshover(!ishover)
    }
    let classes = [] 
    if(ishover){
        classes.push('d-flex')
    }

    const responsiveMenuHandler = ()=>{
        setShowResMenu(!showResMenu)
    }
    return ( 
        <div className="menu">
            <Container>
                <div className="menu-content">
                    <div 
                        className="categories" 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    >
                        <div className="main-category">
                            <span><FaBars className="bar-icon"/>CATEGORIES</span>
                        </div>
                        <div className={`${classes} cate-list`}>
                            <div className="category-list">
                                <img src="/images/cloth-cate.jpg" alt=""/>
                                <h6>Clothing</h6>
                                <ul className="list-unstyled sub-cate">
                                    <li>
                                        <Link to="/shopProducts">Women's Clothes</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Men's Clothes</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Kid's Clothes</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-list">
                                <img src="/images/furn-cate.jpg" alt=""/>
                                <h6>Furniture</h6>
                                <ul className="list-unstyled sub-cate">
                                    <li>
                                        <Link to="/shopProducts">Office Chairs</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Lounge Seating</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">File Cabinets</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-list">
                                <img src="/images/gadg-cate.jpg" alt=""/>
                                <h6>Gadgets</h6>
                                <ul className="list-unstyled sub-cate">
                                    <li>
                                        <Link to="/shopProducts">Mouses</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Headphones</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Keyboards</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-list">
                                <img src="/images/inter-cate.jpg" alt=""/>
                                <h6>Entertainment</h6>
                                <ul className="list-unstyled sub-cate">
                                    <li>
                                        <Link to="/shopProducts">Gifts</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Table Games</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Music & CDs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-list">
                                <img src="/images/shoes-cate.jpg" alt=""/>
                                <h6>Shoes</h6>
                                <ul className="list-unstyled sub-cate">
                                    <li>
                                        <Link to="/shopProducts">Women's Shoes</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Men's Shoes</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Kid's Shoes</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-list">
                                <img src="/images/access-cate.jpg" alt=""/>
                                <h6>Accessories</h6>
                                <ul className="list-unstyled sub-cate">
                                    <li>
                                        <Link to="/shopProducts">Sunglasses</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Bags</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopProducts">Hats</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={responsiveMenuHandler}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                                <NavLink className="nav-link" to="/shopProducts">Shop</NavLink>
                                <NavLink className="nav-link" to="/profile/orders">Orders</NavLink>
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
                {showResMenu ? <ResponsiveMenu /> : null}
                
            </Container>
        </div>
     );
}
 
export default Menu;