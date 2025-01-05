import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import About from './Pages/About';
import Nofound from './Pages/Nofound';
import Categories from './Pages/Categories';
import Order from './Pages/Order';

function App() {
  const [count, setCount] = useState(10);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Nofound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
