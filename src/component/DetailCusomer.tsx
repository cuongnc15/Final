import { Link, NavLink } from "react-router-dom";

function DetailCusomer(props: any) {
    return(
      <>         
            <tr key={props.idx}>
                <td><Link  to={`customers:${props.id}/details`}>{props.firstName}</Link></td>
                <td>{props.lastName}</td>
                <td>{props.address}</td>
                <td>{props.city}</td>
                <td>{props.state.name}</td>
                <td></td>
                <td><Link  to={`customers:${props.id}/orders`}>View Order</Link></td>
            </tr>
      </>
    );
}
  export default DetailCusomer;