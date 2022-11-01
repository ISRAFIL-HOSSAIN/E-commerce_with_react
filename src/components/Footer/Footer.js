import React from 'react';
import './footer.css'; 
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"; 
import { Link } from "react-router-dom"; 

import logo from "../../assets/Logo.png"; 

const Footer = () => {
  const year = new Date().getFullYear(); 
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt="logo"/>
              </Link>
            </div>
            <p className='footer__text mt-2'>
              We believe in quality and make sure to provide the
              best product for our family.Our customer is not only
              our customer, but also like our family because you always
              choose the bestest for your family,So are we.
            </p>
            <div className='icon'>
              <span><i class="ri-facebook-circle-fill" style={{width:"60px"}}></i></span>
              <span><i class="ri-instagram-line"></i></span>
              <span><i class="ri-youtube-fill"></i></span>
            </div>
            
           
          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#">Trending Products</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#">Offer Products</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#">Best Sales Products</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                </ListGroupItem>
              </ListGroup>

            </div>
          </Col>
          <Col lg='2'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="/aboutus">About Us</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact Us</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                 <p> <i class="ri-map-pin-line"></i>&nbsp; 1229 Dhaka, Bangladesh</p>
                
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                 
                  <p> <i class="ri-phone-line"></i>&nbsp;  +880-133330000</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <span><p><i class="ri-mail-line"></i>&nbsp; example@gmail.com</p></span>
                  
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                </ListGroupItem>
               
              </ListGroup>

            </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright {year} . All right reserved La Ta Ra
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer