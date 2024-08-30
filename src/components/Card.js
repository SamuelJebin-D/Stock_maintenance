import {React,useEffect} from 'react';

import './Card.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Card=(props)=>{


    const update_cart=()=>{
        props.add_cart(props.id);
    }

    useEffect(()=>{
        AOS.init({duration:800});
    },[]);


    return (
        <div className='card' >
            
                <img src={props.img}></img>
        
            <div className='inner-card'>
                <h2>{props.name}</h2>
                <p>{props.des}</p>
                <h6>{props.prize}$</h6>            
            </div>
            <div className='inner-card-2'>                
                <button id="ibtn" onClick={update_cart} >ADD</button>
            </div>
            
           
        </div>
    );
}


export default Card;