import userContext from "./contextapi";
import { useContext } from "react";

function Cart(){
    const user = useContext(userContext);
    return (
        <>
            <h1>{`Cart : ${user}`}</h1>
        
        </>
    );
};

export default Cart;