// import React from 'react'
// import '../styles/Cart.css'

// const Cart = ({ cartDetails }) => {
//   return (
//     <div className='cart-items'>
//         <div className='cart-items-header'>Cart Items</div>
        
//         {cartDetails.length === 0 &&(
//             <div className='cart-items-empty'>No Items are added in the cart</div>
//         )}

//         <div>
//             {cartDetails.map((detail) =>(
//                 <div key={detail.id} className="cart-items-list">
//                     <img className='cart-items-image'
//                         src={detail.Image} 
//                         alt={detail.name} 
//                     />
//                     <div className='cart-items-name'>{detail.name}</div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// }

// export default Cart

import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart