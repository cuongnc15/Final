import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
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
console.log(items);
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
      <div>
        <input className="col-6"
        type="text" 
        placeholder="Search" 
        ref={inputSearchRef} onChange={handleKeyPress}
        />
      </div>   
      <CustomerList items={filteredItems}/> 
    </>      
    );
    
  }
  export default Customers;