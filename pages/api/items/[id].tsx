import fetch from "isomorphic-fetch";
import helpers from "../../../helpers/detailHelpers";
import searchHelpers from "../../../helpers/searchHelpers";

export default async (req: any, res: any) => {
  try {
    console.log(req);
    var helper = new helpers();

    const res1 = await fetch(
      "https://api.mercadolibre.com/items/" + req.query.id
    );
    const json1 = await res1.json();
    const res2 = await fetch(
      "https://api.mercadolibre.com/items/" + req.query.id + "/description"
    );
    const json2 = await res2.json();

    const res3 = await fetch(
      "https://api.mercadolibre.com/categories/" + json1.category_id
    );
    const json3 = await res3.json();

    res.status(200).json(
      helper.buildResponse({
        detalle: json1,
        description: json2,
        categories: new searchHelpers().getCategories(json3),
      })
    );
  } catch (error) {
    res.status(500).json();
  }
};
