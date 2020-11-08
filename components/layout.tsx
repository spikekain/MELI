import Header from './header';
import Head from 'next/head';
import { Container } from "react-bootstrap";
import "../styles/sass/basic.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageLogo from "../assets/favico.ico";

const Layout =  (props:any) => {
    return (
      <div>
        <Head>
          <title>Mercado Libre</title>
          <link rel="shortcut icon" href={imageLogo} />
          <link rel="canonical" href="http://localhost:3000/meli" />
        </Head>
        <Header ></Header>
        <Container>
          <div className=" back">{props.children}</div>
        </Container>
      </div>
    );

}
export default Layout;