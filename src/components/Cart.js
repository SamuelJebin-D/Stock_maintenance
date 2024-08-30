import {React, useEffect, useState} from 'react';
import Cartcard from './Cartcard';

import './Cart.css';
import { Link } from "react-router-dom";


const Cart=(props)=>{

    

    const cart_item=props.item.filter((d)=>{
        if(d.rating>0){
            return d;
        }    
    });

    
    
    const add_quantity=(index)=>{

        cart_item.forEach(element => {

            if(element!=undefined && element.id==index){
                element.rating+=1;
            }
            
        });
        
    }

    const minus_quantity=(index)=>{
        
        cart_item.forEach(element => {

            if(element!=undefined && element.id==index && element.rating!=0){
                element.rating-=1;
            }
            
        });
    }
    

    const completed=()=>{
       // console.log(cart_item);
        window.localStorage.setItem('cart',JSON. stringify(cart_item));
        props.update_disp_handler();
    }

    const items=cart_item.map((d)=>{  
        if(d!=undefined){
            return <Cartcard name={d.Name}  id={d.id} quantity={d.rating} prize={d.Price} add={add_quantity} minus={minus_quantity}  ></Cartcard>        
        }     
           
    });  


    return(
        <div >
            <div className='outer-cart' onClick={props.update_disp_handler}></div>
            <div className='inner-cart'>
                <div className='inner2'>
                
            <h2>Cart:</h2>
             {items}
             <Link to='/bill/print'><button id="sub" onClick={completed}>submit</button></Link>
            

             </div>
            </div>  
            
        </div>
    );

}



export default Cart;