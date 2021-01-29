import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import './style.css';
import foodType from './../Data/bestseller';
import IcecreamList from '../container/IcecreamList';
import Productlist from '../container/Productlist';



/**
* @author
* @function 

**/

const Home= (props) => {

    const [allproduct, setAllproduct] = useState(false)

    const showProducts = ()=>{
        allproduct?setAllproduct(false):
        setAllproduct(true);
    }
    const foodList = foodType.map((item)=> (
            <div className="foodDetails" key={item.id} >
                <div className="food-img">
                    <img src={item.img} alt="food-img" />
                    <div className="food_name">
                    <p>{item.Food_name}</p>
                </div>
                </div>
                
            </div>
    ))
    
  return(
    <div className="home">
        <div className="Rectangle">
            <div className="col">
                <img src="./images/shopimg.png" alt="shopimg" className="shop" />
            </div>
            <div className="col">
                <p className="Mano-Super-Market">Mano Super Market</p>
                <img src="./images/noun-tick-684585.svg" alt="noun-tick" className= "noun_tick_684585"  />
                <p className="TRUSTED-SELLER">TRUSTED SELLER</p>
            </div>
            <Form inline>
                <FormControl type="text" placeholder="Search for products..." className="search" />
            </Form>
            <div className="bestsellers">
                <p className="best">Bestsellers</p>
                <div className= "foodType">
                {foodList}
                </div>
            </div>
           <IcecreamList /> 
            <div className="productsName">
                <p className="seeAllproduct">
                    SEE ALL PRODUCTS
                </p>
                <div className="arrow_img" onClick={showProducts}>
                <img src="./images/assets-icons-global-arrow.svg"
                className="assetsiconsglobalarrow"  alt ="asset.icon"/>  
                </div>    
            </div>
            <Productlist checkAllproduct= {allproduct}/>
        </div>
    </div>
    
   )

 }

export default  Home;
