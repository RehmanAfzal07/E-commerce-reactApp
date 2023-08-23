import React from 'react'
import {useCart} from 'react-use-cart';
import {CartDash, Heart} from 'react-bootstrap-icons';
import '../index.css';

function ItemCard(props) {
     const {addItem}=useCart();
     return (
          <>
<div className='col-12 col-md-6 col-lg-4  mb-4'>
    <div className='.card p-0  h-20 shadow'>
         <div className='card-body' >
         <img  src={props.img} alt='card-img' className='card-img-top img-fluid' />
              <h5 className='card-title'>{props.title}</h5>
              <p className='card-text' style={{fontSize:"10px"}}>{props.desc}</p>
              <p className='card-text'>Rs./ <b>{props.price}</b></p>
              <button className='btn btn-outline-success btn-sm'
              onClick={()=>addItem(props.item)}  
              >Cart <CartDash /></button>
              <button  className='btn btn-outline-danger btn-sm' style={{margin: "5px"}}
              onClick={()=>addItem(props.item)} 
              >Favorite <Heart/></button>
         </div>
    </div>  
</div>
     
     </>
     )
}

export default ItemCard;
