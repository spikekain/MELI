import React, { Component } from "react";
import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import imageLogo from "../assets/Logo_ML.png";
import searchLogo from "../assets/ic_Search.png";
import "../styles/sass/basic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "next/router";

class Header extends Component {
  constructor(props: any) {
    super(props);
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    if (this.state != null) {
      this.props.router.push("/items?search=" + this.state.query);
    }
  };
  render() {
    return (
      <Row className="header">
        <Col>
          <img src={imageLogo} alt="Logo Meli" className="float-right" />
        </Col>
        <Col xs={8}>
          <form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Buscar Productos, marcas y mas..."
                aria-label="Buscador"
                aria-describedby="basic-addon2"
                name="query"
                className="inputSearch"
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button className="buttonSearch" type="submit">
                <img src={searchLogo} alt="Logo Meli" className="float-right" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}
export default withRouter(Header);
