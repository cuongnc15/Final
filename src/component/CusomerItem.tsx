import { Link } from "react-router-dom";
import female from "../assets/female.jpg";
import male from "../assets/male.jpg";


function DetailCusomer(props: any) {
    
    return(
      <>         
            <tr style={{ textAlign: "left" }} key={props.idx}>
                <td><img style={{width: "25px"}}
                src={props.gender === "male"? male : female} alt="" /></td>
                <td ><Link style={{textDecoration: "none"}}
                 to={`${props.id}/details`}>{props.firstName}</Link></td>
                <td >{props.lastName}</td>
                <td >{props.address}</td>
                <td >{props.city}</td>
                <td >{props.state.name}</td>
                <td >
                  { props.orders !== undefined ?
                    props.orders
                    ?.reduce((num: any, cost: any) => num + cost.itemCost, 0)
                    .toFixed(2) : 0
                  }
                </td>
                <td ><Link  style={{textDecoration: "none"}}
                to={`${props.id}/orders`}>View Order</Link></td>
            </tr>
      </>
    );
}
  export default DetailCusomer;