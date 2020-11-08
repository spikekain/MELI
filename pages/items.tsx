import Layout from "../components/layout";
import { withRouter } from "next/router";
import fetch from "isomorphic-fetch";

import ItemsList from "../components/itemsList";
import Breadcrumbs from "../components/breadcrumbs";
import helpers from "../helpers/searchHelpers";

function Items(props) {
  console.log(props);
  return (
    <>
      <Layout>
        <Breadcrumbs categories={props.res.categories}></Breadcrumbs>
        <ItemsList listItems={props.res}></ItemsList>
      </Layout>
    </>
  );
}

Items.getInitialProps = async (ctx) => {
  const res = await fetch(
    "http://localhost:3000/api/items?q=" + ctx.query.search
  );
  const json = await res.json();
  return { res: json };
};

export default Items;
