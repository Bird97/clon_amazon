import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){ //componente Home 
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image"/>
                    
                    <div className="home__row"> 
                        <Product
                            id="12233"
                            title="un botso"
                            price={11.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id="12233"
                            title="otro botso"
                            price={11.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="12233"
                            title="tercer botzo"
                            price={11.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id="12233"
                            title="cuarto botso"
                            price={11.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id="12233"
                            title="quinto botso"
                            price={11.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="12233"
                            title="ultimo botso(más barato)"
                            price={11.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home