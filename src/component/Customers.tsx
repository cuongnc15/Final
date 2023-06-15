import { useEffect, useRef, useState } from "react"
import CustomerList from "./CustomerList"
import userApi from "../api/userApi";

function Customers() {
    const [filteredItems, setFilteredItems] = useState<any>([]);
    const inputSearchRef = useRef<any>("");
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
      (async () => {
      const res = await userApi.getUser();
      setItems(res)
      setFilteredItems(res)
      })()   
    },[])

    const handleKeyPress = () => {
    
      const valueSearch = inputSearchRef.current.value.toLowerCase();
      const updateList = items
        .slice()
        .filter((item: any) => item.firstName.toLowerCase().includes(valueSearch)
        || item.lastName.toLowerCase().includes(valueSearch)
        );

      setFilteredItems(updateList);
    };
    
    return(
      <>
      <div className="container">    
        <div className="col-2" style={{margin: "15px"}}>
          <label className="form-label">Filter</label>
          <input className="form-control"
            type="text" 
            placeholder="Search" 
            ref={inputSearchRef} onChange={handleKeyPress}
        />
        </div>   
      <CustomerList items={filteredItems}/> 
      </div>  
      </>      
    );
    
  }
  export default Customers;