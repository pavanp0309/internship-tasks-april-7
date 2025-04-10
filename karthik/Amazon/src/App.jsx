
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 59.99, rating: 4.5, image: './src/assets/w.jpeg', isPrime: true },
  { id: 2, name: 'Smartphone Stand', price: 14.99, rating: 4.2, image: './src/assets/p.jpeg', isPrime: false },
  { id: 3, name: 'Bluetooth Speaker', price: 39.99, rating: 4.8, image: './src/assets/b.jpeg', isPrime: true },
  { id: 4, name: 'Laptop Sleeve', price: 22.99, rating: 4.1, image: './src/assets/po.jpeg', isPrime: true },
  { id: 5, name: 'USB-C Charger', price: 18.99, rating: 4.6, image: './src/assets/c.jpeg', isPrime: false },
  { id: 6, name: 'Portable Monitor', price: 187.99, rating: 4.3, image: './src/assets/la.jpeg', isPrime: true },
  { id: 7, name: 'macBook Monitor', price: 109.99, rating: 4.0, image: './src/assets/ap.jpeg', isPrime: true },
  { id: 8, name: 'apple cpu', price: 1679.99, rating: 4.7, image: './src/assets/cp.jpeg', isPrime: true },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4 grid-wrapper">
        <div className="row g-4">
          {products.map(product => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-lg-3 d-flex align-items-stretch"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
