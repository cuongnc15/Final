import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Detail from "../component/Detail";

const CustomerInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="container" style={{ marginTop: 30 }}>
        <h2>Customer Infomation</h2>
        <Tabs 
          defaultActiveKey="info"
          id="uncontrolled-tab-example"
          style={{ display: "flex", justifyContent: "left"}}>
            <Tab
              eventKey="info"
              title={ 
                <span onClick={() => navigate(`/customers/${params.id}/details`)}
                style={{ margin: "25px", padding: 5, border: "1.5px solid", borderRadius: 10, cursor: "pointer" }}>            
                Customer Detail</span>
              }      
            >                              
            </Tab>            
            <Tab
              eventKey="order"
              title={<span 
                onClick={() => navigate(`/customers/${params.id}/orders`)}
                style={{ margin: "25px", padding: 5, border: "1.5px solid", borderRadius: 10, cursor: "pointer" }}>                                                                                           
                Customer Order</span>
              }
            >
            </Tab>  
        </Tabs>                     
      <Detail/>                 
      </div>
      
      <div style={{ padding: 50 }}>
        <NavLink to="/customers">View All Customer</NavLink>
      </div>
    </>
  );
};

export default CustomerInfo;