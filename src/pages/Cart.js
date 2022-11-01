import React from 'react'
import '../styles/cart.css'; 
import { Link } from "react-router-dom"; 
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Common/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import {motion} from 'framer-motion'; 
import {cartActions} from '../redux/cartSlice'; 
import { useSelector, useDispatch} from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state=>state.cart.cartItems)
  const totalAmount = useSelector((state)=> state.cart.totalAmount);
  return <Helmet title='Cart'>
    <CommonSection title="Shoping Cart" />
    <section>
      <Container>
      <Row>
        <Col lg='9'>
          {
            cartItems?.length === 0 ? 
            (<h2 className="fs-4 text-center"> No Items add to the Cart</h2>)
            :
            
            ( <table className='table bordered' style={{textAlign:"center"}}>
            <thead>
            <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
              </tr>
             
            </thead>

            <tbody>
              {
                cartItems?.map((item,index)=>(
                  <Tr item={item} key={index}/>                
                ))
              }
             
            </tbody>
          </table>
        )
          
          }
         
        </Col>
        <Col lg="3">
          <div>
            <h6 className="d-flex align-items-center justify-content-between">
              Subtotal
              <span className="fs-4 fw-bold">Tk {totalAmount} </span>
              
            </h6>
           
          </div>
          <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
          <div>
            <Link to='/checkout'>
                <button className='check_btn  w-100 mt-3'>
                Checkout
                </button>
            </Link>
            <Link to='/shop'>
                <button className='check_btn  w-100 mt-3' >
                Continue Shopping
                </button>
            </Link>
          </div>
        </Col>
      </Row>
      </Container>
    </section>
  </Helmet>
}
const Tr=({item})=>{
  const dispatch = useDispatch() ;
  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItem(item.id)); 
  }
  return(
    <tr >
      <td>
        <img src={item.imgUrl} alt=""/>
      </td>
      <td>
        {item.productName}
      </td>
      <td>
        Tk {item.price}
      </td>
      <td>{item.quantity}</td>
      <motion.td whileTap={{scale:1.1}} 
      onClick={deleteProduct}>
        <i class="ri-delete-bin-line" style={{color:"red"}}></i>
      </motion.td>
    </tr>
  )

}
export default Cart