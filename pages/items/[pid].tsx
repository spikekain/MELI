import React, { Component } from "react";
import Layout from "../../components/layout";
import Breadcrumbs from "../../components/breadcrumbs";
import ItemDetail from "../../components/itemDetail";

function ItemsDetail(props) {
  console.log(props);

  return (
    <>
      <Layout>
        {props.status=='sucess'?   
        <div>
          <Breadcrumbs categories={props.res.categories}></Breadcrumbs>
            <ItemDetail itemData ={props.res}></ItemDetail>

        </div>       
            
          :
          <h4>Producto no encontrado</h4>
        }
       
      </Layout>
    </>
  );
}

ItemsDetail.getInitialProps = async (ctx) => {
  try {
    const res1 = await fetch("http://localhost:3000/api/items/" + ctx.query.pid);
    const json = await res1.json();
    return { status:'sucess' , res: json };    
  } catch (error) {
    console.log(error);
    return{status:'error' }    
  }

  
};
export default ItemsDetail;
