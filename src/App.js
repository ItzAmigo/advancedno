//импорт модулей
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//импорт кастомных компонентов
import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import LogoutPage from "./components/pages/LogoutPage/LogoutPage";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage";

//импорт стилей
import './app.sass'


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/logout" element={<LogoutPage/>}/>
                <Route path="/product/:productId" element={<ProductPage productId/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
            </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
