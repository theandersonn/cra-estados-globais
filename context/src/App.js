import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './hooks/useProducts';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </ProductsProvider>
    </Router>
  );
}

export default App;