import React, { Component } from "react";
import "../styles/sass/basic.scss";
import fetch from "isomorphic-fetch";
import ItemCard from '../components/itemCard';

class ItemsList extends Component {
 
  constructor(props) {
    super(props); 
    console.log(this.props);      
  }

  render() {
    return(
    <div>
      {
        this.props.listItems.items.map((item)=>{
          return(
            <ItemCard
            key={item.id}
            dataItem={item}
            >
            </ItemCard>
          )
        }, this)
      }    
    </div>);
  }
}

export default ItemsList;
