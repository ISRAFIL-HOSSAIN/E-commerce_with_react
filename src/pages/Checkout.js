import React,{useState} from 'react'
import {Container, Row, Col, Form, FormGroup } from "reactstrap"; 
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Common/CommonSection';

import '../styles/checkout.css'; 
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { 
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom'; 
import { db } from '../firebase.config';
import UseAuth from '../custom_user/UseAuth';

const Checkout = () => {

  const currentUser = UseAuth();  
  const [shipping,setShipping] = useState('0'); 
  const totalQty = useSelector(state=>state.cart.totalQuantity) ;
  const totalAmount = useSelector(state=>state.cart.totalAmount); 
  const totalCost = Number(totalAmount + 60 ); 
  const [checkout,setCheckout]= useState([]); 
  const navigate = useNavigate(); 


  const handleInput =(e)=>{
    console.log(e.target.id); 
    console.log(e.target.value); 
  
    const id = e.target.id; 
    const value = e.target.value; 
  
    setCheckout({ ...checkout , [id]: value });   
    }

    const modify = {...checkout, "total-quantity":totalQty,"subtotal": totalAmount,"shipping": shipping ? "Yes" : "No"  }

    const handleSubmit = async(e)=>{
      e.preventDefault(); 
      try{
        // store user data in firestore database 
        await addDoc(collection(db,"checkout"),{
            ...modify,
            timeStamp: serverTimestamp(),
        }); 
        toast.success('Product Buy Successfully!'); 
        navigate('/'); 
      }
      catch(error){
         
          toast.error("Something was Wrong ", {error}); 
      }
    }

  return <Helmet title={"Checkout"}>
    <CommonSection title={"Checkout"}/> 
    <section>
      <Container>
        <Row>
          <Col lg='8'>
          <h6>Billing Information</h6>
            <Form className='billing__form' >
              <FormGroup className='form__group'>
                <input type = "text" id="name" placeholder='Enter your Name'   onChange={handleInput}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type = "text" id="email" placeholder='Enter your Email'  onChange={handleInput}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type = "tel" id="phone" placeholder='Phone Number'  onChange={handleInput}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type = "text" id="address" placeholder='Street Address'  onChange={handleInput}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type = "text" placeholder='City'  id="city"  onChange={handleInput}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type = "text" placeholder='Postal Code' id="postal"  onChange={handleInput} />
              </FormGroup>
              <FormGroup className='form__group'>
                <input type = "text" placeholder='Country' id="country"  onChange={handleInput}/>
              </FormGroup>
            </Form>
          </Col>
          <Col lg='4'>
            <div className='checkout__cart'>
              <h6>Total Qty : <span>{totalQty} items</span></h6>
              <h6>Subtotal : <span>{totalAmount}</span></h6>
              <h6>
                <span>Shipping : <br />
                  <select className='mt-2 shipping' name='shipping' onChange={e=>{setShipping(e.target.value)}}>
                    <option value= '0'> 14 days Shipping</option>
                    <option value='60'> 7 days Shipping</option>

                  </select>
                </span>
                
                <span>Tk {shipping}</span>
              </h6>
             <h4>Total Cost : 
                { shipping === '0' ?  
                  <span> TK {totalAmount}</span>
                  : <span> Tk {totalCost}  </span> 
                }
              </h4>
             
              
              
              <button className='buy__btn auth__btn w-100 mt-5'  onClick={handleSubmit} >
                Place an Order
              </button>
              
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>

    
  </Helmet>
}

export default Checkout