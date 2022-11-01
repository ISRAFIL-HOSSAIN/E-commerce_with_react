import React from 'react';
import {motion } from "framer-motion"; 
import { Col } from 'reactstrap'; 
import { Link } from "react-router-dom"; 
import '../../styles/product-cards.css'; 
import {useDispatch } from "react-redux"; 
import { cartActions } from '../../redux/cartSlice';
import { toast } from 'react-toastify'; 

const ProductCard = ({item}) => {
    console.log('item', item)
    const dispatch = useDispatch()
    const addToCart = ()=>{
        dispatch(cartActions.addItem({
            id:item.id, 
            productName:item.product,
            price:item.price,
            imgUrl:item.imgUrl, 

        }));
        toast.success('product added to Cart')

    };
  return (
    <Col lg='3' md='4' sm="1" className='mb-2'>
        <div className='product__card' >
                <Link to={`/shop/${item.id}`}>
                    <div className='product__img' >
                        <motion.img whileHover={{scale:0.96}} src= {item.imgUrl} alt="Image" />
                    </div>
                    <div className='p-2 product__info'>
                        <h3 className='product__name'>{item.product}</h3>
                        <span>{item.category}</span>
                    </div>
                </Link>
                <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
                    <span className='price'>Tk {item.price} </span>
                    <motion.span whileTap={{scale:1.2}} className='cart' onClick={addToCart}>Add To Cart</motion.span>
                </div>
           
        </div> 
    </Col>
  )
}

export default ProductCard