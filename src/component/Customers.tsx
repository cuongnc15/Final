import { useEffect, useRef, useState } from "react"
import CustomerList from "./CustomerList"

function Customers() {
    const [filteredItems, setFilteredItems] = useState([]);
    const inputSearchRef = useRef<any>("");
    const [items, setItems] = useState([]);
    
    const fetchData = () => {
      fetch("http://localhost:3000/api/customers")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setItems(data)
          setFilteredItems(data)
        })
    }    

    useEffect(() => {
        fetchData()
      }, [])

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