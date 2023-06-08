import DetailCusomer from "./CusomerItem";

const CustomerList = (props: any) => {
  const items = props
  return (
    <div className="container">              
      <table className="table table-striped"
        style={{padding: "30px 50px"}}
      >
        <thead>
          <tr style={{ textAlign: "left" }}>
                 <th  scope="col"></th>
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
                gender = {item.gender}
                orders = {item.orders}
                />                                                                
            ))
          }    
        </tbody>
      </table>
    </div>
);};

export default CustomerList;