import React from 'react';
import Breadcrumbs from './breadcrumbs';
import { useParams } from 'react-router-dom';
import Furniture_gallary from './furniture_gallary';
import Item from './items';
import Header from "../../header";
import Footer from "../../footer";
const Product = (props) => {
  const {id}=useParams();
  const id_int=id*1;
  const arr=  props.data.related_products;
  return (
    <>
    <Header/>
    <main id="main">
      <Breadcrumbs header={props.data.header} description={props.data.description}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '40px' }}>
        { arr.map((el,index,arr)=><Furniture_gallary url={el.image_url} name={el.name} id={index} header={props.data.header}/> )}
      </div>
      <section id="courses" className="courses">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
             { props.data.related_products[id].product_details.map((el,index,arr)=>{return <Item data={el} />;} )}
          </div>
        </div>
      </section>
    </main>
      <Footer/>
      </>
  );
};

export default Product;