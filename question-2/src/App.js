import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/categories/:categoryname/products/:productid" render={({ match }) => (
                    <ProductDetails category={match.params.categoryname} productId={match.params.productid} />
                )} />
                 <Route path="/categories/:categoryname/products" render={({ match }) => (
                    <ProductList category={match.params.categoryname} />
                )} />
                 <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
