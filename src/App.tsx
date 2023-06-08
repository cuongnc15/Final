import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import CustomersPage from './page/CustomersPage';
import OrdersPage from './page/OrdersPage';

import Header from './component/Header';
import InfoPage from './page/InfoPage';


function App() {
  return (
    <>
    <Header/>
    <Routes >
    <Route path='/' element={ <Navigate to="/customers" /> }/>
    <Route path="/customers" element={<CustomersPage />} />
    <Route path="customers/:id/details" element={<InfoPage />} />
    <Route path="customers/:id/orders" element={<OrdersPage />} />
    
  </Routes>
  </>
  );
}

export default App;
