import DetailCusomer from "./DetailCusomer";

const CustomerList = (props: any) => {
  const items = props
  return (
    <div>              
      <table>
        <thead>
        <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Address</th>
                 <th>City</th>
                 <th>State</th>
                 <th>Order Total</th>
                 <th></th>
        </tr>
        </thead>
        <tbody>  
    {        
        props.items.map((item: any, idx: number) => (                                                                        
                <DetailCusomer
                key = {idx}
                id = {item.id}
                firstName = {item.firstName}
                lastName = {item.lastName}
                address = {item.address}
                city = {item.city}
                state = {item.state}
                />                                                                
            ))
    }    
    </tbody>
    </table>
    </div>
);};

export default CustomerList;