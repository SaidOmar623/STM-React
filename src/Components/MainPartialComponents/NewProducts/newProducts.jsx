import React from 'react'
import {useSelector} from 'react-redux';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' 
import NewProduct from '../../SecondaryComponents/Product/NewProduct/newProduct';
import NewHead from '../../SecondaryComponents/SectionHeader/NewHead/newHead';
import './newProducts.css'

const NewProducts = (props) => {
    const token = localStorage.getItem('apiToken')
    const products = useSelector((state) => state.products.items);
    let cart = useSelector((state) => state.cart.items);
    let wishlist = useSelector((state) => state.wishlist.items);
    
    if(!token){
        cart = [];
        wishlist = []
    }

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return ( 
        <div className="new-section">
            <div className="container">
                <NewHead header="New Products"/>
                <Slider {...settings}>
                    {products.map(product=>(
                        <div key={product.id}>
                            <NewProduct 
                                product={product}
                                inCart={cart.length>0 && cart.filter(item => item.id === product.id).length > 0 }
                                inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
     );
}
 
export default NewProducts;