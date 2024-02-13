import userContext from "./contextapi";
import React, {useContext} from "react";
import Cart from "./cart";


function Product(){
    const user = useContext(userContext);
    return (
        <>
            <h1>{`Product page : ${user}`}</h1>
            <Cart />
        </>
    );
}

export default Product;