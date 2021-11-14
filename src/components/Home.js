// import React from 'react';


// function Home(props) {
//     console.warn("props",props);
//     return (
//         <div>
           
//             <h1>React-Redux simple project</h1>
//             <div className="cart-wrapper">
//                 <div className="img-wrapper item">
//                     <img src="https://www.91-img.com/gallery_images_uploads/c/1/c1aaeb6f916a122334f2de02e335de16aab7cc7d.JPG?tr=h-550,w-0,c-at_max" />
//                 </div>
//                 <div className="text-wrapper item">
//                     <span>
//                         I-Phone
//                     </span>
//                     <span>
//                         Price: $1000.00
//                     </span>
//                 </div>
//                 <div className="btn-wrapper item">
//                     <button 
//                     onClick={
//                         ()=>{props.addToCartHandler()}
//                         }>
//                         Add To Cart</button>
//                         <button 
//                     onClick={
//                         ()=>{props.removeToCartHandler()}
//                         }>
//                         Remove To Cart</button>
//                         <div>
//                             <img src="./images/dress1.jpg" />
//                             <span>Dress 1</span>
//                             <span>Price: $100.00</span>
//                             <button 
//                     onClick={
//                         ()=>{props.addToCartHandler()}
//                         }>
//                         Add To Cart</button>
//                         <button 
//                     onClick={
//                         ()=>{props.removeToCartHandler()}
//                         }>
//                         Remove To Cart</button>
                                  
                    
//                         </div>
                        
                        
                        
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Home

import React from 'react'
import { stockData } from "../data";



const Home = (props) => {
    
        
    return (
        <>
        <div>
            {stockData.map((data, key) => {
                return (
                    <div key={key}>
                        <h4>{data.title}</h4>
                        <div><img src={data.image} alt={data.description} ></img></div>
                        <h4>{data.price}$ </h4>
                        <button onClick={()=>{props.addToCartHandler()}}>Add to cart</button>
                        <button onClick={()=>{props.removeToCartHandler()}}>Remove to cart</button>
                                
                       
                        </div>
                )
            })}
        </div>
            
        </>
    )
}

export default Home