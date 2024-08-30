import {React,useState} from 'react';

import './Cartcard.css';

const Cartcard=(props)=>{

    
    const [quantity,update_quantity]=useState(props.quantity);

    const plus_quantity=()=>{
        update_quantity(quantity+1);
    }

    const minus_quantity=()=>{
        if(quantity==0){

        }else{
            update_quantity(quantity-1);
        }
        
    }

    return(
        
        <div className='cartcard'>
            <p>{props.name}</p>
            <div className='qua'>
                <button onClick={()=>{
                    minus_quantity();
                    props.minus(props.id)
                }}>-</button>
                <h5>{quantity}</h5>
                <button onClick={()=>{
                    plus_quantity();
                props.add(props.id)}}>+</button>
            </div>
            <h4>{props.prize}$</h4>
            
        </div>
    );

}



export default Cartcard;