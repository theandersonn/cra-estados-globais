import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductListProvider } from './context/ProductListContext';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <ProductListProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </ProductListProvider>
    </Router>
  );
}

export default App;