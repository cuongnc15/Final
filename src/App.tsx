import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import CustomersPage from './page/CustomersPage';
import DetailPage from './page/DetailPage';
import OrdersPage from './page/OrdersPage';


function App() {
  return (
    
    <Routes>
    <Route path='/' element={ <Navigate to="/customers" /> }/>
    <Route path="/customers" element={<CustomersPage />} />
    <Route path="/customers:id/detail" element={<DetailPage />} />
    <Route path="/customers:id/orders" element={<OrdersPage />} />
    
  </Routes>
  );
}

export default App;
