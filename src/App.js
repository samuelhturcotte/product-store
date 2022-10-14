import StoreComponent from './components/store/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavigation from './components/header/header';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './components/product-details/product-details';
import React from 'react';


function App() {
  let params = (new URL(document.location)).searchParams;
  let search = params.get('search');
  
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNavigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<StoreComponent filter={search} />} />
          <Route path="details/:id" element={<ProductDetails />} />
        </Routes>
      </main>

   </div>
  );
}



export default App;
