import React from "react";
import FamousProduct from "./famous_product";

import Header from "../../header";
import Footer from "../../footer";
import Hero from "./hero";
import Why_us from "./why_us";
const DashBoard=()=>{
        return (
            <div>
                <Header/>
               <Hero/>
                <main id="main">
                    <Why_us/>
                    <FamousProduct/>
                </main>
                <Footer/>
            </div>
        );
};

export default DashBoard;