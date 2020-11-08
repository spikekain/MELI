import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import DisplayHelpers from '../helpers/displayHelper';

interface itemDetailProps {
  itemData: detailModel;
}

const ItemDetail = (props: itemDetailProps) => {
    var helper = new DisplayHelpers();
  return (
    <div>
      <Row className="backItemDetail">
        <Col xs={8}>
          <img
            src={props.itemData.item.picture}
            alt={props.itemData.item.title}
            className="imgDetail"
          />
          <div className="description-area">
            <p className="description-label">Descripción del Producto</p>
            <p className="description-tag">{props.itemData.item.description}</p>
          </div>
        </Col>
        <Col>
          <div className="condition-tag-detail">
            {helper.showCondition(props.itemData.item.condition)}
            {helper.quantitySold(props.itemData.item.sold_quantity)}
          </div>
          <div className="title-tag-detail">{props.itemData.item.title}</div>
          <div className="price-tag-detail">
            {helper.displayCurrency(props.itemData.item.price.currency)}{" "}
            {helper.formatPrice(props.itemData.item.price.amount)}
          </div>
          <div>
            <Button className="btn-comprar">Comprar</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ItemDetail;
