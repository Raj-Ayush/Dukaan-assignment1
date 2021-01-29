import React from 'react'
import { Button, Card, InputGroup } from 'react-bootstrap';
import { iceCream } from '../../Data/iceCreams';
import './style.css';


/**
* @author
* @function IcecreamList
**/

const IcecreamList = (props) => {
  const listItem = iceCream.map((item)=>
        <React.Fragment key={item.id} >
          <Card style={{ width: '18rem' }} className = "IceList-row">
            <Card.Img variant="top" src={item.img}  className="Creamimage-col"/>
            <Card.Body className="body">
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
    <div className="iceCreamList">
      <p className="iceCreamQ">Ice Creams <span className="quantity">{iceCream.length}</span></p>
      <div className="iceCream">
        {listItem}
      </div>
      
    </div> 
   )

 }

export default IcecreamList