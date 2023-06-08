import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const CustomerOrder = () => {
  const params = useParams();
  const [customerOrder, setCustomerOrder] = useState({
    id: null,
    firstName: "",
    lastName: "",
    orders: [
      {
        itemCost: null,
        productName: "",
      }
    ]
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/customers/${params.id}`)
      .then((res) => setCustomerOrder(res.data))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      {customerOrder?.orders ? (
        <>
          <h3 style={{ padding: "30px 0 20px 0" }}>
            Order by {customerOrder?.firstName.charAt(0).toUpperCase()}
            {customerOrder?.firstName.slice(1)} {customerOrder?.lastName}
          </h3>
          <div style={{ borderBottom: "1px solid gray", width: "50%" }}>
            {customerOrder?.orders?.map((order: any, idx: number) => {
              return (
                <>
                  <div key={idx} style={{ display: "flex" }}>
                    <div style={{ width: "150px" }}>
                      {order.productName}
                    </div>
                    <p>${order.itemCost}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="total" style={{ marginLeft: "150px" }}>
            $
            {customerOrder?.orders
              ?.reduce((acc: any, order: any) => acc + order.itemCost, 0)
              .toFixed(2)
            }
          </div>
        </>
      ) : (
        <h3>No Order</h3>
      )}
    </>
  );
};

export default CustomerOrder;