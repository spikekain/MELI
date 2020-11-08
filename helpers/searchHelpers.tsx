import "../models/categorias";
import "../models/item";
import "./authorHelper";
import getAuthor from "./authorHelper";

class SearchHelpers {
  constructor() {}
  getFirstCategories = (resMELI: any): string => {

    try {
     
      if (resMELI.filters.length > 0) {
        return resMELI.filters.filter(function (item){
          return item.id=="category"
        })[0].values[0].id;

      } else {
        var categorias = this.orderRawCategories(
          resMELI.available_filters.filter(function (item){
            return item.id=="category"
          })[0].values
        );
        for (var i = 0; i < categorias.length; i++) {
          if (categorias[i].id != "all") {
            return categorias[i].id;
          }
        }
      }

      return "noCat";

    } catch (error) {
      console.log(error);
      return "noCat";
    }
  };
  orderRawCategories = (listCategorias: categorias[]): categorias[] => {
    listCategorias.sort((a: categorias, b: categorias) => {
      return b.results - a.results;
    });
    return listCategorias;
  };
  getCategories = (categories: any): string[] => {
    var res: string[] = [];
    categories.path_from_root.forEach((element: any) => {
      res.push(element.name);
    });

    return res;
  };
  buildResponse = (resMELI: any, categories: any): searchModel => {
    var resp = {
      author: getAuthor(),
      categories: this.getCategories(categories),
      items: this.getItems(resMELI.results),
    };
    return resp;
  };

  getItems = (results: any[]): item[] => {
    var items: item[] = [];
    var limit = 4;
    if (results.length < 4) limit = results.length;

    for (var i = 0; i < limit; i++) {
      items.push({
        id: results[i].id,
        title: results[i].title,
        picture: results[i].thumbnail,
        condition: results[i].condition,
        city: results[i].address.state_name,
        free_shipping: results[i].shipping.free_shipping,
        price: {
          currency: results[i].currency_id,
          amount: results[i].price,
          decimals: 0,
        },
      });
    }
    return items;
  };
}
export default SearchHelpers;
