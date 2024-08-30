import {React, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import './PrintPage.css';

const PrintPage=()=>{

    const list=JSON. parse(window.localStorage.getItem('cart'));
    let sno=0;
    var total=0;

    const items=list.map((d)=>{
        sno+=1;
        let cost=d.Price.split("/");
        total+=cost[0]*d.rating;
        
        return (
            <tr className='inner-row'>
                <td>{sno}</td>
                <td>{d.Name}</td>
                <td>{d.rating}</td>
                <td>{d.Price}</td>
                <td>{cost[0]*d.rating}</td>
            </tr>
        )

       
    });


    const[invoice_id,update_invoice_id]=useState('');
    const[po_id,update_po_id]=useState('');
    const[due_date,update_due_date]=useState('');
    const[customer_name,update_customer_name]=useState('');
    const[customer_address,update_customer_address]=useState('');
    const[invoice_date,update_invoice_date]=useState('');

    return (


        <div>


            <div className='bill-input'>{
                <form>
                    <lable>Invoice id:</lable>
                    <input type="text" value={invoice_id} onChange={(event)=>{update_invoice_id(event.target.value)}}></input>
                    <lable>PO id:</lable>
                    <input type="text"  value={po_id}  onChange={(event)=>{update_po_id(event.target.value)}}></input>
                    <lable>Invoice Date:</lable>
                    <input type="date" value={invoice_date}  onChange={(event)=>{update_invoice_date(event.target.value)}}></input>
                    <lable>DUE Date:</lable>
                    <input type="date" value={due_date}  onChange={(event)=>{update_due_date(event.target.value)}}></input>
                    <lable>Customer Name:</lable>
                    <input type="text" value={customer_name}  onChange={(event)=>{update_customer_name(event.target.value)}}></input>
                    <lable>Customer Address:</lable>
                    <input type="text" value={customer_address}  onChange={(event)=>{update_customer_address(event.target.value)}}></input>
               </form>
            }

            </div>

        <div className='outerbill' id='section-to-print'>
            <button id='printbtn' onClick={()=>{window.print();}}>print</button>

            <div className='bill-header'>
                <h1>INVOICE</h1>
                <div className='bill-header-inner'>
                    <p>invoice#&emsp;&emsp;&emsp;&nbsp;&nbsp;:{invoice_id}</p>
                    <p>INVOICE DATE&nbsp;:{invoice_date}</p>
                    <p>P.O#&emsp;&emsp;&emsp;&emsp;&emsp;:{po_id}</p>
                    <p>DUE DATE&emsp;&emsp;&nbsp;:{due_date}</p>


                </div>

            </div>

            <div className='innerbill'>

            <div className='detail-bill'>

            <div className='company-details'>
                <h3>FROM</h3>
                <h4>RVS Agengy</h4>
                <p>No:2 Estate Road,</p>
                <p>Peelamedu,</p>
                <p>Coimbatore - 641004</p>
            </div>

            <div className='to-detail'>
                <h3>TO</h3>
                <h4>Bill to</h4>
                <p>{customer_name}</p>
                <p>{customer_address}</p>
                

            </div>

            </div>
            

           

            <div className='bill-table'>

                <table>
                    <thead>

                   
                    <tr>
                        <th>Unit</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Unit price</th>
                        <th style={{"min-width":"120px"}}>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items}
                    </tbody>
                    <tr className='outer-row'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Sub Total</td>
                        <td>{total}</td>
                    </tr>
                    <tr className='outer-row'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tax 18%</td>
                        <td>{Math.round(total*0.18)}</td>
                    </tr>
                    <tr className='outer-row'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{ Math.round(total+(total*0.18))}</td>
                    </tr>
                    <tr className='outer-row'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Paid</td>
                        <td></td>
                    </tr>
                    <tr className='outer-row'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total due</td>
                        <td></td>
                    </tr>
                    
                   

                </table>
                

            </div>
            
            </div>
            <div className='footer-para'>
                <p>TERMS AND CONDITION:</p>
                <p>Payment us due within 15 days</p>
                <p>State Bank Of India</p>
                <p>Account Number&ensp;:895643728134</p>
                <p>Routing Number&ensp;:987123453782</p>
            </div>
            <p className='bill-footer'>Thank You For Your Business!</p>
        </div>

        </div>
        
    );
}


export default PrintPage;