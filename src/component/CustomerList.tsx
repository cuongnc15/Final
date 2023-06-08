import DetailCusomer from "./DetailCusomer";

const CustomerList = (props: any) => {
  const items = props
  return (
    <div>              
      <table className="table table-striped">
        <thead>
        <tr>
                 <th scope="col">First Name</th>
                 <th scope="col">Last Name</th>
                 <th scope="col">Address</th>
                 <th scope="col">City</th>
                 <th scope="col">State</th>
                 <th scope="col">Order Total</th>
                 <th scope="col"></th>
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