import { Breadcrumb } from "react-bootstrap";
import "../styles/sass/breadcrumb.scss";
function Breadcrumbs(props) {
  console.log(props);
  return (
    <>
      <Breadcrumb>
      {
        props.categories.map((item)=>{
          return(
            <Breadcrumb.Item  key={item} active> {item}</Breadcrumb.Item>
          )
        })
    }  
      </Breadcrumb>
    </>
  );
}
export default Breadcrumbs;
