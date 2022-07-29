import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(){
    return(
        <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg" alt="" className="checkoutProduct__image" />
        
        <div className="checkoutProduct__info">

            <p className="checkoutProduct__title">asdsadfsdfsdfsd </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                 <strong>35</strong>   
            </p>
            <div className="checkoutProduct__rating">
                ⭐⭐⭐⭐
            </div>
            <button>Remove from Basket</button>
        </div>
        
    </div>
    );
}

export default CheckoutProduct