import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from './Product';
import UserList from './UserList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/userlist">User List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;