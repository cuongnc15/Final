import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SelectedUser = () => {
    const [users, setUsers] = useState({
        id: "",
        firstName: "",
        lastName: "",
        order: {
            productName: "",
            itemCost: ""
        },
        gender: "",
        address: "",
    });
    const params = useParams();
    const { Id } = params;
    useEffect(() => {
        
        const getSingleUser = async () => {
        
          const response = await fetch(
            `http://localhost:3000/api/customers/${Id}`
          );
          const data = await response.json();
          
          setUsers(data);
        };
        getSingleUser();
      }, []);
      return (
        <>
        <p>asd</p>
        </>
      )
}

export default SelectedUser;
