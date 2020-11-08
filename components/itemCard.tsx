import React, { Component } from "react";
import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import "../styles/sass/basic.scss";
import Shipping from "../components/shipping";
import Link from "next/link";

class ItemCard extends Component {
  constructor(props) {
    super(props);
  }
  formatPrice = (price) : string => {
    const options2 = {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    };
    const numberFormat2 = new Intl.NumberFormat("de-DE", options2);
    return numberFormat2.format(price.amount);
  };
  render() {
    var url_detail = "/items/" + this.props.dataItem.id;
    return (
      <div className="itemCard"> 
        <Link href={url_detail}>
          <Row >
            <Col className="lateral-derecho col-2">
              <img
                src={this.props.dataItem.picture}
                alt={this.props.dataItem.title}
                className="imagenCard"
              />
            </Col>
            <Col className="col-7">
              <div className="price-tag">
                <span>
                  {this.formatPrice(this.props.dataItem.price)}{" "}
                  {this.props.dataItem.free_shipping ? <Shipping /> : null}
                </span>
              </div>
              <div className="title-tag">
                <span>{this.props.dataItem.title} </span>
              </div>
            </Col>
            <Col>
              <div className="city-tag">
                <span>{this.props.dataItem.city} </span>
              </div>
            </Col>
          </Row>
        </Link>
      </div>
    );
  }
}
export default ItemCard;
