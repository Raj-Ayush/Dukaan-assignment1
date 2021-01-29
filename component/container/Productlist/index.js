import React from 'react'
import { Button, Card, InputGroup } from 'react-bootstrap';

import './style.css';
import { allProduct } from './../../Data/productsList';


/**
* @author
* @function ProductList
**/

const Productlist = (props) => {
  let count=1;

  const listItem = allProduct.slice(1,allProduct.length).map((item)=>
        <React.Fragment key={item.id} >
          <div className="border"></div>
          <Card style={{ width: '18rem' }} className = "Productlist-row">
            <Card.Img variant="top" src={item.img}  className="productimage-col"/>
            <Card.Body className="body-col">
              <Card.Title className="title">{item.iceCreamName}</Card.Title>
              <Card.Text className="unit">
                {item.unit}
              </Card.Text>
              <div className="price">
                <Card.Text className="offer_price">
                  {item.currency+item.offer_Price}
                </Card.Text>
                <Card.Text>
                  {item.offer_Price === item.Exact_price? 
                      null
                      :
                      <Card.Text className="exact_price">
                          {item.currency+item.Exact_price}
                      </Card.Text>
                  }
                </Card.Text>
              </div>
              
              <InputGroup className="mb-3" className="AddtoCart">
                <Button variant="primary"><span>-</span></Button>
                <span className="NumberofQ">Add</span>
                <Button variant="primary"><span>+</span></Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <div className="border"></div>
        </React.Fragment>
        )
  return(
    <div className="productList">
      <p className="ProductQ">Ice Creams <span className="quantity">{props.checkAllproduct? allProduct.length:1}</span></p>
      <div className="iceCream">
        <React.Fragment key={allProduct[0].id} >
          <Card style={{ width: '18rem' }} className = "Productlist-row">
            <Card.Img variant="top" src={allProduct[0].img}  className="productimage-col"/>
            <Card.Body className="body-col">
              <Card.Title className="title">{allProduct[0].iceCreamName}</Card.Title>
              <Card.Text className="unit">
                {allProduct[0].unit}
              </Card.Text>
              <div className="price">
                <Card.Text className="offer_price">
                  {allProduct[0].currency+allProduct[0].offer_Price}
                </Card.Text>
                <Card.Text>
                  {allProduct[0].offer_Price === allProduct[0].Exact_price? 
                      null
                      :
                      <Card.Text className="exact_price">
                          {allProduct[0].currency+allProduct[0].Exact_price}
                      </Card.Text>
                  }
                </Card.Text>
              </div>
              <InputGroup className="mb-3" className="AddtoCart">
                <Button variant="primary"><span>-</span></Button>
                <span className="NumberofQ">Add</span>
                <Button variant="primary"><span>+</span></Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </React.Fragment>
        {props.checkAllproduct?
        listItem : 
        null}
      </div>
      
    </div> 
   )

 }

export default Productlist