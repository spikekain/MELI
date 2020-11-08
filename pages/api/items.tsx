import fetch from "isomorphic-fetch";
import helpers from "../../helpers/searchHelpers";

export default async (req, res) => {
  try {
    var helper = new helpers();
    const res1 = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.q
    );
    const json1 = await res1.json();
    var categoria = helper.getFirstCategories(json1);

    const res2 = await fetch(
      "https://api.mercadolibre.com/categories/" + categoria
    );
    const json2 = await res2.json();

    res.status(200).json(helper.buildResponse(json1, json2));
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};
