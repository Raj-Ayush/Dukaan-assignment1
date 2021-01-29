import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="footer">
        <div className="footer-row">
            <Card style={{ width: '18rem' }} className="footer-col">
                <Card.Img variant="top" src="images/icons-easyreturns.svg" className="iconImage" />
                <Card.Body className="Body">
                    <Card.Text className="content">
                        Free Delivery <span>(above ₹500)</span>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="footer-col" id="main">
                <Card.Img variant="top" src="images/icons-protection.svg"  className="iconImage"/>
                <Card.Body className="Body">
                    <Card.Text className="content">
                        Buyer Protection
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="footer-col">
                <Card.Img variant="top" src="images/icons-support.svg" className="iconImage" />
                <Card.Body className="Body">
                    <Card.Text className="content">
                        Customer Support
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div className="bord"></div>   
        <div className="Address">
            <h4>STORE DETAILS</h4>
            <p><b>Mano Super Market</b></p>
            <p>Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</p>
            <img src="./images/group-18.svg"
                className="Group-18" alt="whatsapp.icon" />
        </div>
    </div>
   )

 }

export default Footer
