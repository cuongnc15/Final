import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import CustomersPage from './page/CustomersPage';

import OrdersPage from './page/OrdersPage';
import store from './store/Store';
import { Provider } from 'react-redux';
import DetailPage from './page/DetailPage';
import Header from './component/Header';


function App() {
  return (
    <Provider store={store}>
    <Header/>
    <Routes>
    <Route path='/' element={ <Navigate to="/customers" /> }/>
    <Route path="/customers" element={<CustomersPage />} />
    <Route path="customers/:Id/details" element={<DetailPage />} />
    <Route path="customers/:Id/orders" element={<OrdersPage />} />
    
  </Routes>
  </Provider>
  );
}

export default App;
