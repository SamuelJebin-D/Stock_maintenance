import {React, useEffect, useState} from 'react';


import Card from './Card';
import Cart from './Cart';
import PrintPage from './PrintPage';
import './Billing.css';
import { Link } from "react-router-dom";
import axios from 'axios';

import {FaShoppingCart,FaUserCircle,FaTrashAlt} from 'react-icons/fa';


// const item=[{
//     key:1,
//     quantity:0,
//     img:"https://5.imimg.com/data5/SELLER/Default/2022/4/HO/SX/XC/133854047/tmt-bar-500x500.jpg",
//     name:"8mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"410/piece",
//     des:"Diameter-8mm         Usage/Application-Construction         Grade-Fe 500D         Material-Mild Steel        Single Piece Length-36 meter"  ,  
//     star:4
//     },
    
//     {
//         key:2,
//     quantity:0,
//     img:"https://www.tatasteel.com/media/3373/hot-rolled.jpg",
//     name:"Hot-Rolled Steel Sheets and Coils",
//     prize:"74/Kg",
//     des:"Hot-Rolled Steel Sheets and Coils are applied to a wide range of uses such as, automobiles, electrical appliances, construction materials, containers, and steel pipes, and receive high acclaim from our customers for its excellent quality.",
//     star:4.4
//     },
    
//     {
//         key:3,
//     quantity:0,
//     img:"https://www.tatasteel.com/media/3371/cold-rolled.jpg",
//     name:"Cold-Rolled Steel Sheets and Coils",
//     prize:"71/kg",
//     des:"Cold-Rolled Steel Sheets and Coils are extensively used as basic materials in automobiles, electrical appliances, steel office equipment, various types of containers, and numerous other products closely connected to our daily lives",
//     star:4.2
//     },
    
//     {
//         key:4,
//     quantity:0,
//     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqFWnltoTCSf365VqY97LRHEPi43kCXzdcg&usqp=CAU",
//     name:"6mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"241/piece",
//     des:"Diameter-6mm     Usage/Application-Construction            Grade-Fe 500D           Material-Mild Steel         Single Piece Length-36 meter",
//     star:4.1
//     },
    
//     {
//         key:5,
//     quantity:0,
//     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUgIPSpgQIp998hXtZfau5pgms40qf1fv3g&usqp=CAU",
//     name:"10mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"628/piece",
//     des:"Diameter-10mm          Usage/Application-Construction        Grade-Fe 500D        Material-Mild Steel        Single Piece Length-36 meter",
//     star:4.2
//     },
    
//     {
//         key:6,
//     quantity:0,
//     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6ojAa0ra_8bGzBmFjbD52KkfisOrQl4eUA&usqp=CAU",
//     name:"12mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"891/piece",
//     des:"Diameter-12mm          Usage/Application-Construction        Grade-Fe 500D        Material-Mild Steel        Single Piece Length-36 meter",
//     star:4.1
//     },
    
//     {
//         key:7,
//     quantity:0,
//     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzB6BfgPjt0Tfvs_d2CmqGHybMN6lWRwN9Q&usqp=CAU",
//     name:"16mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"1586/piece",
//     des:"Diameter-16mm        Usage/Application-Construction        Grade-Fe 500D        Material-Mild Steel        Single Piece Length-36 meter",
//     star:4.4
//     },
    
//     {
//         key:8,
//     quantity:0,
//     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagZcqTOkUSG0lZFifxLWBmQMqUGSmCH8jQ67LYkx8QlbqaH_Hor82RBCO89swgIa7nbY&usqp=CAU",
//     name:"20mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"2477/piece",
//     des:"Diameter-20mm        Usage/Application-Construction        Grade-Fe 500D        Material-Mild Steel        Single Piece Length-36 meter",
//     star:4
//     },
    
//     {
//         key:9,
//     quantity:0,
//     img:"https://5.imimg.com/data5/SELLER/Default/2021/8/VO/ZQ/YZ/135096323/arstmt-500x500.jpg",
//     name:"25mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"2477/piece",
//     des:"Diameter-25mm        Usage/Application-Construction        Grade-Fe 500D        Material-Mild Steel        Single Piece Length-36 meter",
//     star:4.5
//     },
    
//     {
//         key:10,
//     quantity:0,
//     img:"https://5.imimg.com/data5/SELLER/Default/2022/5/GN/LJ/DV/150686044/32mm-mild-steel-tmt-bars-500x500.jpg",
//     name:"32mm Mild Steel TMT Bars, For Construction, Grade: Fe 500D",
//     prize:"6328/piece",
//     des:"Diameter-32mm        Usage/Application-Construction        Grade-Fe 500D        Material-Mild Steel        Single Piece Length-36 meter",
//     star:4.4
//     },
    
//     {
//         key:11,
//     quantity:0,
//     img:"https://3.imimg.com/data3/PK/VC/MY-8984314/ms-square-250x250.jpg",
//     name:"MS Square Bar, for Manufacturing",
//     prize:"40/kg",
//     des:"Application: Manufacturing        Single Piece Length: 6 meter        Thickness/Diameter: 0-1 inch, 1-2 inch, 2-3 inch",
//     star:4.3
//     },
    
//     {
//         key:12,
//     quantity:0,
//     img:"https://5.imimg.com/data5/ECOM/Default/2022/2/WL/TX/JN/53296564/aaps100358-1-500x500.jpg",
//     name:"Steel Gray Square Shaped",
//     prize:"109/package",
//     des:"Package of	100 grams        Size - 12 mm * 12 mm",
//     star:4
//     },
    
//     {
//         key:13,
//     quantity:0,
//     img:"https://5.imimg.com/data5/NO/DX/MY-8360288/weldox-2fquend-1100-500x500.jpg",
//     name:"Weldox 1100 Plate, Thickness: 10-20 mm",
//     prize:"175/kg",
//     des:"Surface Treatment	- Hot Rolled        Material Grade	- 1100        Thickness	-10-20 mm        Pattern	        -Plain        Tensile Strength   -1250 - 1500 MPa",
//     star:4.3
//     },
    
//     {
//         key:14,
//     quantity:0,
//     img:"https://5.imimg.com/data5/SELLER/Default/2021/4/OJ/FD/IH/39486176/astm-a516-gr-60-plates-500x500.jpg",
//     name:"Manifest Alloys ASTM A516 Gr 60 Plates, Thickness: : 4mm-100mm",
//     prize:"90/kg",
//     des:"Thickness	: 4mm-100mm     Brand	:Manifest Alloys        Surface Treatment	:2B,2D,BA,NO.1,NO.4,NO.8,8K,mirror,checkered,embossed,hair line,sand blast,Brush,etc            Finishing	:rolled plate (HR),Cold rolled sheet (CR),2B,2D,BA NO(8),SATIN (Met with Plastic Coated)           Width	:1000mm,1219mm,1500mm,1800mm,2000mm,2500mm,3000mm,3500mm,etc",
//     star:4.4
//     },
    
//     {
//         key:15,
//     quantity:0,
//     img:"https://5.imimg.com/data5/IJ/MS/MY-4947466/aisi-4140-steel-plate-500x500.jpg",
//     name:"AISI 4140 Steel Plate, For Industrial, Size (feet X feet): 15 X 15 Feet",
//     prize:"100/kg",
//     des:"Material Grade :	4140            Size (feet X feet):	15 X 15 Feet            Material	:Stainless Steel        Usage/Application	:Industrial",
//     star:3.9
//     }
//     ];

const Billing=()=>{

    
    const [item,update_item]=useState([]);

    const add_to_cart=(index)=>{
       item[parseInt(index)-1].rating+=1;

       console.log(item);
    } 


   

    useEffect(async()=>{

        const result=await axios.post('http://localhost:3001/student/fetch',{});
      
        update_item(result.data.result);

    },[])
    
    const [disp,update_disp]=useState(true);

    const update_disp_handler=()=>{

        if(disp==true){
            update_disp(false);
        }else{
            update_disp(true);
        }
    }


    // const [print,update_print]=useState(false);

    // const update_print_handler=()=>{

    //     if(print==false){
    //         update_print(true);
    //     }else{
    //         update_print(false);
    //     }

    // }


    // const [print_value,update_print_value]=useState([]);

    
    const items=item.map((d)=>{    
        return <Card id={d.id} quan={d.rating}  name={d.Name} prize={d.Price} star={0}  des={d.dis}  img={d.quantity}  add_cart={add_to_cart}></Card>
    });


    return (<div className='bill'>
        {/* <div className='summa'></div> */}
        <Link to='/login'><button id='logout-btn' onClick={()=>{
                window.localStorage.removeItem('username');
                window.localStorage.removeItem('password');

                window.location.reload();


            }
            }><FaUserCircle/>&ensp;log out</button> </Link>
        <p className='reset' onClick={()=>{window.location.reload()}}>Reset&ensp;<FaTrashAlt/></p>

        {<p className='bill-para' onClick={update_disp_handler}>Cart&ensp;<FaShoppingCart/></p>}
        
        {!disp && <Cart item={item} update_disp_handler={update_disp_handler} ></Cart>}

        <div className='wrapper'>
            {items}
        </div>
        

        <div className='summa'></div>

      

    </div>);

}



export default Billing;