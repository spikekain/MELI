import getAuthor from "./authorHelper";
import "../models/detailItem";
class DetailHelpers {
  constructor() {}
  buildResponse = (dataMeli: any):detailModel => {
    
    return {
        author: getAuthor(),
        categories:dataMeli.categories,
        item: this.getItem(dataMeli),
      };
  };
  getIdCategorie=(dataMeli:any):string=>{
      return dataMeli.category_id;
  }
  getItem = (dataMeli: any): detailItem => {
    var resp: detailItem = {
      id: dataMeli.detalle.id,
      city: dataMeli.detalle.seller_address.city.name,
      condition: dataMeli.detalle.condition,
      title: dataMeli.detalle.title,
      picture: dataMeli.detalle.pictures[0].url,
      free_shipping: dataMeli.detalle.shipping.free_shipping,
      price: {
        amount: dataMeli.detalle.price,
        currency: dataMeli.detalle.currency_id,
        decimals: 0,
      },
      sold_quantity: dataMeli.detalle.sold_quantity,
      description: dataMeli.description.plain_text,
    };

    return resp;
  };
}
export default DetailHelpers;
