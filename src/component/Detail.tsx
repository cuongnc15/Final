import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import female from "../assets/female.jpg";
import male from "../assets/male.jpg";


const CustomerDetail = () => {
  const params = useParams();
  const [customerDetail, setCusomerDetail] = useState({
    id: 0,
    gender: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: {
      name: "",
    },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/customers/${params.id}`)
      .then((res) => setCusomerDetail(res.data))
      .catch((err) => console.log(err));
    
    }, [params]);

  return (
    <div>
      {customerDetail?.gender === "male" ? (
        <img src={male} style={{ width: "100px", height: "100px" }} />
      ) : (
        <img src={female} style={{ width: "100px", height: "100px" }} />
      )}

      <h3>
        {customerDetail?.firstName.charAt(0).toUpperCase()}
        {customerDetail?.firstName.slice(1)} {customerDetail?.lastName}
      </h3>
      <div style={{ paddingTop: "30px" }}>
        <p>{customerDetail?.address}</p>
        <p>
          {customerDetail?.city},{customerDetail?.state?.name}
        </p>
      </div>
    </div>
  );
};

export default CustomerDetail;